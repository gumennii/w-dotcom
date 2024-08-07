"use client";

import React, { FC, useCallback, useState, useEffect } from "react";
import classNames from "classnames";
import { getModalMaxWidth } from "@/utils/styling";
import { Video } from "../Video";
import PortalModal from "./PortalModal";
import useAmplitudeContext from "@/hooks/amplitude";

export type VideoModalProps = {
  maxWidth: Types.AvailableModalMaxWidth;
  automaticOpenTimeout?: number;
  children: React.ReactNode;
  closeOnClickOutside?: boolean;
  className?: string;
  triggerClass?: string;
  url: string;
  trackShowVideo?: boolean;
};

export const VideoModal: FC<VideoModalProps> = ({
  automaticOpenTimeout = 0,
  maxWidth,
  children,
  closeOnClickOutside = true,
  className,
  triggerClass,
  url,
  trackShowVideo = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHideVideo = () => {
    trackAmplitudeEvent("[Modal] Closed", {
      button: "Close Button/ESC/Overlay",
      location: "[Modal] - Modal Video",
    });
  };

  const clickShowVideo = () => {
    trackAmplitudeEvent("[Modal] Opened", {
      button: "Show Video/Play",
      location: "[Modal] - Modal Video",
    });
  };

  const onToggleModal = useCallback(() => {
    setShowModal(prev => !prev);
    setPlayVideo(prev => !prev);
  }, []);

  const onClickOutside = useCallback(() => {
    if (closeOnClickOutside) {
      setPlayVideo(false);
      setShowModal(false);
      clickHideVideo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeOnClickOutside]);

  useEffect(() => {
    if (automaticOpenTimeout) {
      setTimeout(() => setShowModal(true), automaticOpenTimeout * 1000);
    }
  }, [automaticOpenTimeout]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClickOutside();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClickOutside]);

  return (
    <div>
      <div
        onClick={() => {
          onToggleModal();
          if (trackShowVideo) clickShowVideo();
        }}
        className={classNames("cursor-pointer text-primary", triggerClass)}
      >
        {children}
      </div>
      {showModal && (
        <PortalModal showModal={showModal} onClickOutside={onClickOutside}>
          <div className={classNames("modal-box bg-[#0006] p-0", getModalMaxWidth(maxWidth), className)}>
            <div
              onClick={() => {
                onToggleModal();
                clickHideVideo();
              }}
              className="btn btn-white btn-circle btn-sm absolute right-2 top-2 z-20"
            >
              ✕
            </div>
            <Video url={url} playVideo={playVideo} controls={false} />
          </div>
        </PortalModal>
      )}
    </div>
  );
};
