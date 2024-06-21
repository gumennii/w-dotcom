"use client";

import React from "react";
import Link from "next/link";

import cn from "@/utils/cn";
import { AppStoreIcon, GooglePlayIcon, Image, Text } from "@/components/ui";

import { AppsLinks, defaultAppsLinks, desktopImages, tabletAndMobileImages } from "./_constants";
import useWindowSize from "@/hooks/windowResize";

export type MobileAppProps = React.HTMLAttributes<HTMLDivElement> & {
  layout?: "leftTop" | "rightTop";
  title?: string;
  subtitle?: string;
  appsLinks?: AppsLinks[];
};

type TStoresIcons = {
  appStore: JSX.Element;
  googlePlay: JSX.Element;
};

const appsLinksIconsMap: TStoresIcons = {
  appStore: <AppStoreIcon className="w-32 md:w-auto" />,
  googlePlay: <GooglePlayIcon className="w-32 md:w-auto" />,
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
          } mt-52 w-full items-end justify-center gap-4 bg-primary text-white md:relative md:mt-0 lg:mt-36`,
          className
        )}
        ref={ref}
      >
        <div className={`absolute w-full md:relative md:w-[40%] lg:w-[30rem]`}>
          <Image
            src={androidSrc}
            alt={androidAlt}
            width={androidWidth}
            height={androidHeight}
            borderRadius="none"
            className={cn(
              "absolute w-[12.5rem] rounded-t-3xl bg-transparent max-[768px]:bottom-36 max-[768px]:right-[25%] max-[700px]:right-[22%] max-[616px]:bottom-40 max-[576px]:bottom-56 max-[570px]:right-[15%] max-[440px]:right-[5%] md:bottom-0 lg:w-64",
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
              "absolute w-[13rem] rounded-t-3xl bg-transparent max-[768px]:bottom-36 max-[768px]:left-[25%] max-[700px]:right-[22%] max-[616px]:bottom-40 max-[576px]:bottom-56 max-[570px]:left-[15%] max-[440px]:left-[5%] md:bottom-0 md:z-10 lg:w-64",
              {
                "md:right-0 lg:left-0": layout === "rightTop",
              },
              { "md:left-0 lg:left-auto lg:right-0": layout === "leftTop" }
            )}
          />
        </div>

        <div className="z-50 flex w-full flex-col bg-primary py-8 md:w-[60%] lg:w-auto lg:py-12">
          <Text type="h1" className="uppercase italic">
            {title}
          </Text>
          <div className={`flex flex-col`}>
            <Text type="h3" className="py-4">
              {subtitle}
            </Text>
            <div className={`flex gap-x-4`}>
              {appsLinks?.map(link => {
                const linkIcon = link.key as keyof TStoresIcons;
                return (
                  <button key={link.alt}>
                    <Link href={link.href ?? "#"} target="_blank">
                      {appsLinksIconsMap[linkIcon]}
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
