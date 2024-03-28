import React from "react";
import ContentfulImage from "@/lib/contentful-image";

export type ProfileImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const ProfileImage = React.forwardRef<HTMLElement, ProfileImageProps>(({ ...props }, ref) => {
  return (
    <div className="flex shrink-0 w-full h-auto rounded-lg md:row-span-2 lg:row-span-3">
      <figure ref={ref} className="block w-full rounded-lg">
        <ContentfulImage
          {...props}
          src={props.src ?? "/"}
          alt="Profile Image"
          height="208"
          width={208}
          className="w-full h-full md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-lg"
        />
      </figure>
    </div>
  );
});

ProfileImage.displayName = "ProfileImage";
