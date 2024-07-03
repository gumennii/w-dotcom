"use client";

import { FC, ReactNode, useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { getModalMaxWidth } from "@/utils/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { hasCookie, setCookie } from "cookies-next";
import cn from "@/utils/cn";

export type InteractiveModalProps = {
  maxWidth: Types.AvailableModalMaxWidth;
  children: ReactNode;
  closeOnClickOutside?: boolean;
  position: number;
  className?: string;
};

export const InteractiveModal: FC<InteractiveModalProps> = ({
  maxWidth,
  children,
  closeOnClickOutside = false,
  position,
  className,
}) => {
  const [showForm, setShowForm] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setShowForm(hasCookie("showTestingForm"));
  }, []);

  useEffect(() => {
    setDisplay(!hasCookie("displayForm"));
  }, []);

  const onToggleModal = useCallback(() => {
    setShowModal(prev => !prev);
  }, []);

  const onClickOutside = useCallback(() => {
    if (closeOnClickOutside) setShowModal(false);
  }, [closeOnClickOutside]);

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
      setCookie("displayForm", "true", {
        maxAge: 60 * 60 * 24,
      });
    }
  }, [display, position, scrollPercentage]);

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
        onClick={onClickOutside}
      >
        <div className={classNames("modal-box p-0", getModalMaxWidth(maxWidth), className)}>
          <div
            onClick={onToggleModal}
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
