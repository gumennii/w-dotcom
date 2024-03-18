"use client";

import React from "react";
import Link from "next/link";

import cn from "@/utils/cn";
import { Image, Text } from "@/components";

import { AppsLinks, defaultAppsLinks, desktopImages, tabletAndMobileImages } from "./_constants";
import useWindowSize from "@/hooks/windowResize";

export type MobileAppProps = React.HTMLAttributes<HTMLDivElement> & {
  layout?: "leftTop" | "rightTop";
  title?: string;
  subtitle?: string;
  appsLinks?: AppsLinks[];
};

const MobileApp = React.forwardRef<HTMLDivElement, MobileAppProps>(
  (
    {
      title = "Next Level Sports on the go",
      subtitle = "Download the Next Level Sports app for iPhone on the App Store",
      layout = "rightTop",
      appsLinks = defaultAppsLinks,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const [width] = useWindowSize();

    const [androidPhone, iPhone] = width < 1024 ? tabletAndMobileImages : desktopImages;
    const { src: androidSrc, alt: androidAlt, width: androidWidth = 255, height: androidHeight = 552 } = androidPhone;
    const { src: iPhoneSrc, alt: iPhoneAlt, width: iPhoneWidth = 255, height: iPhoneHeight = 527 } = iPhone;

    return (
      <div
        role="banner"
        {...props}
        className={cn(
          `flex ${
            layout === "rightTop" ? "flex-row lg:flex-row-reverse" : "flex-row-reverse lg:flex-row"
          } items-end justify-center text-white w-full mt-52 md:mt-0 lg:mt-36 md:relative bg-primary gap-4`,
          className
        )}
        ref={ref}
      >
        <div className={`w-full md:w-[40%] lg:w-[30rem] absolute md:relative`}>
          <Image
            src={androidSrc}
            alt={androidAlt}
            width={androidWidth}
            height={androidHeight}
            borderRadius="none"
            className={cn(
              "absolute max-[576px]:bottom-56 max-[616px]:bottom-40 max-[768px]:bottom-36 md:bottom-0 max-[440px]:right-[5%] max-[570px]:right-[15%] max-[700px]:right-[22%] max-[768px]:right-[25%] w-[12.5rem] lg:w-64 rounded-t-3xl bg-transparent",
              {
                "md:left-0 lg:right-0": layout === "rightTop",
              },
              { "md:right-0 lg:left-0": layout === "leftTop" }
            )}
          />
          <Image
            src={iPhoneSrc}
            alt={iPhoneAlt}
            width={iPhoneWidth}
            height={iPhoneHeight}
            borderRadius="none"
            className={cn(
              "absolute max-[576px]:bottom-56 max-[616px]:bottom-40 max-[768px]:bottom-36 max-[440px]:left-[5%] max-[570px]:left-[15%] max-[700px]:right-[22%] max-[768px]:left-[25%] md:bottom-0 md:z-10 w-[13rem] lg:w-64 rounded-t-3xl bg-transparent",
              {
                "md:right-0 lg:left-0": layout === "rightTop",
              },
              { "md:left-0 lg:right-0 lg:left-auto": layout === "leftTop" }
            )}
          />
        </div>

        <div className="w-full md:w-[60%] lg:w-auto flex flex-col py-8 lg:py-12 z-50 bg-primary">
          <Text type="h1" className="uppercase italic">
            {title}
          </Text>
          <div className={`flex flex-col`}>
            <Text type="h3" className="py-4">
              {subtitle}
            </Text>
            <div className={`flex gap-x-4 `}>
              {appsLinks?.map(link => {
                return (
                  <button key={link.alt}>
                    <Link href={link.href ?? "#"} target="_blank">
                      <Image src={link.src} alt={link.alt} width={180} height={50} borderRadius="small" />
                    </Link>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

MobileApp.displayName = "MobileApp";

export default MobileApp;
