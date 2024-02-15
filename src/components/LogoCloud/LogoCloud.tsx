import React, { FC } from "react";
import Link from "next/link";
import cn from "@/utils/cn";
import ContentfulImage from "@/lib/contentful-image";

export interface Logo {
  imagePath: string;
  linkPath?: string;
  altText?: string;
}

export interface LogoCloudProps {
  title: string;
  logos: Logo[];
  className?: string;
}

const LogoCloud: FC<LogoCloudProps> = ({ title, logos, className, ...props }) => {
  return (
    <div
      aria-label="Logo Cloud"
      {...props}
      className={cn(
        "flex flex-col lg:flex-row items-center lg:justify-between gap-x-6 gap-y-8 py-16 px-8 md:px-6 lg:px-8 text-primary",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold">{title}</h2>
      <div className="flex gap-x-4 md:gap-x-8 lg:gap-x-16 items-center">
        {logos.map((logo: Logo) => {
          const { linkPath, imagePath, altText } = logo;

          return (
            <Link key={altText} href={linkPath ?? "#"} className="h-[4.6rem] md:h-[5.8rem] lg:h-28">
              <ContentfulImage
                src={imagePath}
                alt={altText ?? ""}
                width={160}
                height={113}
                className="h-full w-auto flex shrink-0"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

LogoCloud.displayName = "LogoCloud";

export default LogoCloud;
