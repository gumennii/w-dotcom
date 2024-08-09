"use client";

import { FC, ReactNode, useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { getModalMaxWidth } from "@/utils/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { hasCookie, setCookie } from "cookies-next";
import cn from "@/utils/cn";
import useAmplitudeContext from "@/hooks/amplitude";

export type InteractiveModalProps = {
  maxWidth: Types.AvailableModalMaxWidth;
  children: ReactNode;
  closeOnClickOutside?: boolean;
  position: number;
  className?: string;
  trakingLocation?: string;
  trakingTriger?: string;
  cookieValue: string;
};

export const InteractiveModal: FC<InteractiveModalProps> = ({
  maxWidth,
  children,
  closeOnClickOutside = false,
  position,
  className,
  trakingTriger,
  trakingLocation,
  cookieValue,
}) => {
  const [showForm, setShowForm] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [display, setDisplay] = useState(true);
  const [isContent, setIsContent] = useState(false);

  const { trackAmplitudeEvent } = useAmplitudeContext();

  const modalHandler = (action: string) => {
    trackAmplitudeEvent(action, {
      button: trakingTriger,
      location: trakingLocation,
    });
  };

  useEffect(() => {
    setShowForm(hasCookie("showTestingForm"));
  }, []);

  useEffect(() => {
    setDisplay(!hasCookie(cookieValue));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onToggleModal = useCallback(() => {
    setShowModal(prev => !prev);
  }, []);

  const onClickOutside = useCallback(() => {
    if (!isContent && closeOnClickOutside) setShowModal(false);
  }, [closeOnClickOutside, isContent]);

  const onClickContent = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isContent) e.stopPropagation();
    },
    [isContent]
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPercentage >= position && display) {
      setShowModal(true);
      setDisplay(false);
      setCookie(cookieValue, "true", {
        maxAge: 60 * 60 * 24,
      });
      if (trakingLocation && trakingTriger) modalHandler("[Modal] Opened");
    }
  }, [display, position, scrollPercentage]); // eslint-disable-line react-hooks/exhaustive-deps

  if (showForm) {
    return null;
  }

  return (
    <div>
      <dialog
        open={showModal}
        className={classNames("modal h-full w-full !bg-[#000000b0] backdrop-blur", {
          "modal-open z-[999]": showModal,
        })}
        onClick={() => {
          onClickOutside();
          if (trakingLocation && trakingTriger) modalHandler("[Modal] Closed");
        }}
      >
        <div
          onClick={e => onClickContent(e)}
          className={classNames("modal-box p-0", getModalMaxWidth(maxWidth), className)}
        >
          <div
            onClick={() => {
              onToggleModal();
              if (trakingLocation && trakingTriger) modalHandler("[Modal] Closed");
            }}
            className={cn(
              "btn btn-ghost btn-circle btn-md absolute right-2 top-2 flex items-center justify-center text-white",
              { "hidden md:flex": closeOnClickOutside }
            )}
          >
            <FontAwesomeIcon icon={faXmark as IconProp} size="xl" />
          </div>
          {children}
        </div>
      </dialog>
    </div>
  );
};
