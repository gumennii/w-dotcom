"use client";

import { FC, ReactNode, useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { getModalMaxWidth } from "@/utils/styling";

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
  const [showModal, setShowModal] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [display, setDisplay] = useState(true);

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
    }
  }, [scrollPercentage]);

  return (
    <div>
      <dialog
        open={showModal}
        className={classNames("modal h-full w-full", {
          "modal-open z-[999]": showModal,
        })}
        onClick={onClickOutside}
      >
        <div className={classNames("modal-box p-0", getModalMaxWidth(maxWidth), className)}>
          <div onClick={onToggleModal} className="btn btn-circle btn-ghost btn-md absolute right-4 top-4 text-white">
            ✕
          </div>
          {children}
        </div>
      </dialog>
    </div>
  );
};
