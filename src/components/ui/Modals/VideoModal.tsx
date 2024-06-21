"use client";

import React, { FC, useCallback, useState, useEffect } from "react";
import classNames from "classnames";
import { getModalMaxWidth } from "@/utils/styling";
import { Video } from "../Video";

export type VideoModalProps = {
  maxWidth: Types.AvailableModalMaxWidth;
  automaticOpenTimeout?: number;
  children: React.ReactNode;
  closeOnClickOutside?: boolean;
  className?: string;
  triggerClass?: string;
  url: string;
};

export const VideoModal: FC<VideoModalProps> = ({
  automaticOpenTimeout = 0,
  maxWidth,
  children,
  closeOnClickOutside = true,
  className,
  triggerClass,
  url,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const onToggleModal = useCallback(() => {
    setShowModal(prev => !prev);
    setPlayVideo(prev => !prev);
  }, []);

  const onClickOutside = useCallback(() => {
    if (closeOnClickOutside) {
      setPlayVideo(false);
      setShowModal(false);
    }
  }, [closeOnClickOutside]);

  useEffect(() => {
    if (automaticOpenTimeout) {
      setTimeout(() => setShowModal(true), automaticOpenTimeout * 1000);
    }
  }, [automaticOpenTimeout]);

  return (
    <div>
      <div onClick={onToggleModal} className={classNames("cursor-pointer text-primary", triggerClass)}>
        {children}
      </div>
      <dialog
        open={showModal}
        className={classNames("modal h-full w-full !bg-[#000000b0] backdrop-blur", {
          "modal-open z-[999]": showModal,
        })}
        onClick={onClickOutside}
      >
        <div className={classNames("modal-box bg-[#0006] p-0", getModalMaxWidth(maxWidth), className)}>
          <div onClick={onToggleModal} className="btn btn-white btn-circle btn-sm absolute right-2 top-2 z-20">
            ✕
          </div>
          <Video url={url} playVideo={playVideo} controls={false} />
        </div>
      </dialog>
    </div>
  );
};
