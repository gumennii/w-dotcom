import { FC } from "react";
import ContentfulImage from "@/lib/contentful-image";
import classNames from "classnames";
import Link from "next/link";
import cn from "@/utils/cn";

export type ImageProps = {
  src?: string;
  width: number;
  height: number;
  alt?: string;
  link?: string;
  borderRadius?: Types.AvailableBorderRadius;
  className?: string;
};

export const Image: FC<ImageProps> = ({
  src = "/image_not.png",
  width,
  height,
  alt,
  link,
  borderRadius = "large",
  className,
}) => {
  return (
    <>
      {link ? (
        <Link
          href={link}
          className={cn("relative block h-max w-full max-w-max", getBorderRadius(borderRadius), className)}
        >
          <ContentfulImage
            alt={alt ?? "image"}
            className={cn("h-full bg-slate-400 object-cover", getBorderRadius(borderRadius))}
            height={height}
            width={width}
            src={src}
          />
        </Link>
      ) : (
        <div className={cn("relative h-max w-full max-w-max", getBorderRadius(borderRadius), className)}>
          <ContentfulImage
            alt={alt ?? "image"}
            className={cn("h-full object-cover", getBorderRadius(borderRadius))}
            height={height}
            width={width}
            src={src}
          />
        </div>
      )}
    </>
  );
};

const getBorderRadius = (style?: Types.AvailableBorderRadius) => {
  switch (style) {
    case "none":
      return "";
    case "small":
      return "rounded-md";
    case "medium":
      return "rounded-xl";
    case "large":
      return "rounded-3xl";
    case "full":
      return "rounded-full";
    default:
      return "";
  }
};
