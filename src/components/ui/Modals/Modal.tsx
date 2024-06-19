"use client";

import React, { FC, useCallback, useState, useEffect } from "react";
import classNames from "classnames";
import { getModalMaxWidth } from "@/utils/styling";

export type ModalProps = {
  maxWidth: Types.AvailableModalMaxWidth;
  automaticOpenTimeout?: number;
  children: React.ReactNode;
  trigger: string;
  closeOnClickOutside?: boolean;
  className?: string;
  triggerClass?: string;
};

export const Modal: FC<ModalProps> = ({
  automaticOpenTimeout = 0,
  maxWidth,
  children,
  trigger,
  closeOnClickOutside = false,
  className,
  triggerClass,
}) => {
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setShowModal(prev => !prev);
  }, []);

  const onClickOutside = useCallback(() => {
    if (closeOnClickOutside) setShowModal(false);
  }, [closeOnClickOutside]);

  useEffect(() => {
    if (automaticOpenTimeout) {
      setTimeout(() => setShowModal(true), automaticOpenTimeout * 1000);
    }
  }, [automaticOpenTimeout]);

  return (
    <div>
      <div onClick={onToggleModal} className={classNames("cursor-pointer text-primary", triggerClass)}>
        {trigger}
      </div>
      <dialog
        open={showModal}
        className={classNames("modal h-full w-full", {
          "modal-open z-[999]": showModal,
        })}
        onClick={onClickOutside}
      >
        <div className={classNames("modal-box p-8", getModalMaxWidth(maxWidth), className)}>
          <div onClick={onToggleModal} className="btn btn-ghost btn-circle btn-sm absolute right-2 top-2">
            ✕
          </div>
          {children}
        </div>
      </dialog>
    </div>
  );
};
