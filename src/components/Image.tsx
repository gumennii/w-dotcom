import { FC } from "react";
import ContentfulImage from "@/lib/contentful-image";
import classNames from "classnames";
import Link from "next/link";

export type ImageProps = {
  src?: string;
  width: number;
  height: number;
  alt?: string;
  link?: string;
  borderRadius?: Types.AvailableBorderRadius;
};

export const Image: FC<ImageProps> = ({ src = "/image_not.png", width, height, alt, link, borderRadius = "large" }) => {
  return (
    <>
      {link ? (
        <Link
          href={link}
          className={classNames("block w-full relative h-max max-w-max", getBorderRadius(borderRadius))}
        >
          <ContentfulImage
            alt={alt ?? "image"}
            className={classNames("object-cover h-full bg-slate-400", getBorderRadius(borderRadius))}
            height={height}
            width={width}
            src={src}
          />
        </Link>
      ) : (
        <div className={classNames("w-full relative h-max max-w-max", getBorderRadius(borderRadius))}>
          <ContentfulImage
            alt={alt ?? "image"}
            className={classNames("object-cover h-full bg-slate-400", getBorderRadius(borderRadius))}
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
