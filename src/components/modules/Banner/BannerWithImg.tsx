import React from "react";
import Link from "next/link";

import cn from "@/utils/cn";
import { Button, Image } from "@/components/ui";

interface BannerImage {
  src: string;
  alt: string;
}

export type BannerWithImgProps = React.HTMLAttributes<HTMLDivElement> & {
  subTitle?: string;
  title?: string;
  descr?: string;
  image?: BannerImage;
  className?: string;
};

export const BannerWithImg = React.forwardRef<HTMLDivElement, BannerWithImgProps>(
  (
    {
      subTitle = "ABOUT NEXT LEVEL SPORTS",
      title = "THE BEST YOUTH SPORTS EXPERIENCE",
      descr = "Next Level Sports provides Flag Football, Basketball, and Volleyball programs to more than 50,000 participants across 14 states!",
      image = { src: "/team.jpeg", alt: "Our team" },
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <div
        role="banner"
        {...props}
        className={cn(`flex w-full flex-col items-center justify-between lg:flex-row-reverse`, className)}
        ref={ref}
      >
        <div className="clip-patch-img w-full lg:w-1/2">
          <Image
            src={image.src}
            alt={image.alt}
            width={13650}
            height={1050}
            borderRadius="none"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full px-6 py-8 lg:w-1/2">
          <div className="mx-auto flex max-w-[33.5rem] flex-col items-center justify-center gap-4 lg:px-1">
            <h3 className="font-roboto text-sm uppercase tracking-wider">ABOUT NEXT LEVEL SPORTS</h3>
            <h2 className="text-center font-roboto text-3xl font-bold uppercase italic leading-normal lg:text-5xl">
              THE BEST YOUTH SPORTS EXPERIENCE
            </h2>
            <p className="text-center font-inter text-sm leading-relaxed lg:text-lg lg:leading-normal">
              Next Level Sports provides Flag Football, Basketball, and Volleyball programs to more than 50,000
              participants across 14 states!
            </p>
          </div>
        </div>
      </div>
    );
  }
);

BannerWithImg.displayName = "BannerWithImg";

export default BannerWithImg;
