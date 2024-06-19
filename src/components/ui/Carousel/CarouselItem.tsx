import React, { cloneElement, LegacyRef } from "react";
import cn from "@/utils/cn";
import { Button } from "../Button/Button";
import { Image } from "@/components/ui";

export type CarouselItemWidth = "full" | "half";

export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
  readonly innerRef?: LegacyRef<HTMLDivElement>;
  src?: string;
  alt?: string;
  index?: number;
  width?: CarouselItemWidth;
  hasButtons?: boolean;
  buttonStyle?: (value: string) => React.ReactElement;
  onPrev?: () => void;
  onNext?: () => void;
};

const CarouselItem = ({
  children,
  innerRef,
  src,
  alt,
  index = 0,
  width,
  hasButtons,
  buttonStyle,
  onPrev,
  onNext,
  className,
  ...props
}: CarouselItemProps): JSX.Element => {
  const classes = cn("carousel-item relative", className, {
    "w-full": width === "full",
    "w-1/2": width === "half",
    "h-full": true,
  });

  const imageClasses = cn({
    "w-full": width === "full",
  });

  const renderButtons = () => {
    if (buttonStyle != null) {
      return (
        <>
          {cloneElement(buttonStyle("❮"), {
            onClick: onPrev,
          })}
          {cloneElement(buttonStyle("❯"), {
            onClick: onNext,
          })}
        </>
      );
    }

    return (
      <>
        <Button onClick={onPrev} style="ghost" copy="❮" className="h-12 w-12 rounded-full" />

        <Button onClick={onNext} style="ghost" copy="❯" className="h-12 w-12 rounded-full" />
      </>
    );
  };

  return (
    <div {...props} id={`item${index}`} ref={innerRef} className={classes}>
      {src ? (
        <Image src={src} alt={alt} width={1440} height={710} className={imageClasses} borderRadius="none" />
      ) : (
        children
      )}
      {hasButtons && (
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          {renderButtons()}
        </div>
      )}
    </div>
  );
};

export default CarouselItem;
