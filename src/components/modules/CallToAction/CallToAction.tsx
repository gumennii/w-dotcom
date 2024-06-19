import React from "react";
import Link from "next/link";

import cn from "@/utils/cn";
import { AppsLinks, LinkButton } from "./_constants";
import { Button, Image, Text } from "@/components/ui";

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
          `flex w-full flex-col items-center justify-between gap-6 px-4 py-8 md:py-12 lg:flex-row lg:py-12`,
          className
        )}
        ref={ref}
      >
        {images.length > 0 && (
          <div className="relative h-[20.75rem] w-[21rem] py-8 md:h-[35rem] md:w-full lg:h-[40.313rem] lg:w-1/2 lg:max-w-[36.5rem]">
            <Image
              src={firstImage.src}
              alt={firstImage.alt}
              width={384}
              height={512}
              borderRadius="none"
              className="absolute bottom-0 left-0 h-64 w-52 md:h-[32rem] md:w-[24rem] lg:bottom-10 lg:h-[28rem] lg:w-[22rem]"
            />
            <Image
              src={secondImage.src}
              alt={secondImage.alt}
              width={384}
              height={512}
              borderRadius="none"
              className="absolute right-0 top-0 h-64 w-52 md:h-[32rem] md:w-[24rem] lg:top-10 lg:h-[28rem] lg:w-[22rem]"
            />
          </div>
        )}
        <div
          className={cn("flex w-full flex-col items-center justify-center gap-y-4", {
            "lg:w-1/2": images.length > 0,
          })}
        >
          {introText && (
            <span className={cn("text-sm lg:text-base", { uppercase: images.length > 0 })}>{introText}</span>
          )}
          <Text type="h1" className="max-w-[61.5rem] text-center uppercase italic">
            {title}
          </Text>
          <Text type="p" className="max-w-[61.5rem] text-center">
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
