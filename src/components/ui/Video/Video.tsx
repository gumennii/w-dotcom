"use client";
import { FC, useCallback, useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { PlayButton } from "./PlayButon";
import classNames from "classnames";

export type VideoProps = {
  url: string;
  loop?: boolean;
  controls?: boolean;
  lazyLoad?: boolean;
  placeholderImage?: string;
  muted?: boolean;
  playVideo?: boolean;
  className?: string;
};

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const ASPECT_RATION_PADDING = "56.25%";

export const Video: FC<VideoProps> = ({
  url,
  loop,
  controls = true,
  lazyLoad,
  placeholderImage,
  muted = false,
  playVideo,
  className,
}) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const onPlay = useCallback(() => setPlaying(true), []);

  const onPause = useCallback(() => setPlaying(false), []);

  useEffect(() => {
    if (playVideo !== undefined) {
      setPlaying(playVideo);
    }
  }, [playVideo]);

  return (
    <div className={classNames("group/video relative rounded-2xl", className)}>
      {url && (
        <div style={{ paddingBottom: ASPECT_RATION_PADDING }}>
          <ReactPlayer
            ref={playerRef}
            url={url}
            playing={playing}
            onPause={onPause}
            onPlay={onPlay}
            width="100%"
            height="100%"
            controls={controls}
            muted={muted}
            loop={loop}
            style={{
              position: "absolute",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
            light={lazyLoad ? placeholderImage || true : false}
            playIcon={<PlayButton onClick={onPlay} />}
          />
        </div>
      )}
    </div>
  );
};
