import React from "react";
import ContentfulImage from "@/lib/contentful-image";

export type ProfileImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const ProfileImage = React.forwardRef<HTMLElement, ProfileImageProps>(({ ...props }, ref) => {
  return (
    <div className="flex h-auto w-full shrink-0 md:row-span-2 lg:row-span-3">
      <figure ref={ref} className="block w-full">
        <ContentfulImage
          {...props}
          src={props.src ?? "/"}
          alt="Profile Image"
          height="208"
          width={208}
          className="h-16 w-16 rounded-full sm:h-28 sm:w-28 md:h-32 md:w-32"
        />
      </figure>
    </div>
  );
});

ProfileImage.displayName = "ProfileImage";
