import React from "react";
import Link from "next/link";

import cn from "@/utils/cn";
import { AppsLinks, LinkButton } from "./_constants";
import { Button, Image, Text } from "@/components";

export type CallToActionProps = React.HTMLAttributes<HTMLDivElement> & {
  introText?: string;
  title?: string;
  subtitle?: string;
  images?: AppsLinks[];
  buttonData?: LinkButton;
  className?: string;
};

export const CallToAction = React.forwardRef<HTMLDivElement, CallToActionProps>(
  (
    {
      introText,
      title = "The Best Youth Sports Experience",
      subtitle = "We are based in San Mateo, California, but we operate at over 80+ locations throughout California, Arizona, Colorado, Oklahoma, Oregon, Texas, and Utah. Our programs are available to youth participants from Kindergarten through 8th grade. Our partners include high level high school and NCAA athletic programs.",
      images = [],
      buttonData,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const [firstImage, secondImage] = images;

    return (
      <div
        role="banner"
        {...props}
        className={cn(
          `flex flex-col lg:flex-row items-center justify-between gap-6 px-4 py-8 md:py-12 lg:py-12 w-full`,
          className
        )}
        ref={ref}
      >
        {images.length > 0 && (
          <div className="w-[21rem] md:w-full lg:w-1/2 lg:max-w-[36.5rem] py-8 h-[20.75rem] md:h-[35rem] lg:h-[40.313rem] relative">
            <Image
              src={firstImage.src}
              alt={firstImage.alt}
              width={384}
              height={512}
              borderRadius="none"
              className="absolute left-0 bottom-0 lg:bottom-10 w-52 h-64 md:w-[24rem] md:h-[32rem] lg:w-[22rem] lg:h-[28rem]"
            />
            <Image
              src={secondImage.src}
              alt={secondImage.alt}
              width={384}
              height={512}
              borderRadius="none"
              className="absolute right-0 top-0 lg:top-10 w-52 h-64 md:w-[24rem] md:h-[32rem] lg:w-[22rem] lg:h-[28rem]"
            />
          </div>
        )}
        <div
          className={cn("w-full flex flex-col justify-center items-center gap-y-4", {
            "lg:w-1/2": images.length > 0,
          })}
        >
          {introText && (
            <span className={cn("text-sm lg:text-base", { uppercase: images.length > 0 })}>{introText}</span>
          )}
          <Text type="h1" className="uppercase italic text-center max-w-[61.5rem]">
            {title}
          </Text>
          <Text type="p" className="text-center max-w-[61.5rem]">
            {subtitle}
          </Text>
          <Link href={buttonData?.url ?? "#"} target="_blank">
            <Button rounded style="secondary" copy={buttonData?.name ?? "Learn more"} />
          </Link>
        </div>
      </div>
    );
  }
);

CallToAction.displayName = "CallToAction";

export default CallToAction;
