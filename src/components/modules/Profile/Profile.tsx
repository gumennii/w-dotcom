import React from "react";
import cn from "@/utils/cn";
import { ProfileImage, type ProfileImageProps as ImageProps } from "./ProfileImage";
import { TypePeople } from "@/types/contentful";
import { Asset } from "contentful";
import { Markdown } from "@/components/ui";

export type ProfileImageProps = ImageProps;

export type ProfileProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  contents: TypePeople<undefined, string>;
  className?: string;
};

export const Profile = React.forwardRef<HTMLDivElement, ProfileProps>(
  ({ title, contents, className, ...props }, ref): JSX.Element => {
    const { name, biography } = contents.fields;
    const photo = contents.fields.photo as Asset;
    const imagePath = photo ? (photo.fields.file?.url as string) : "/avatar.svg";
    return (
      <div aria-label="Profile" {...props} className={cn("w-full text-primary lg:max-w-7xl", className)} ref={ref}>
        {!name && !biography ? null : (
          <>
            <h2 className="font-sant mb-4 text-xl font-semibold lg:text-2xl">{title}</h2>
            <div className="flex flex-col gap-x-6 md:flex-row">
              <div className="w-full shrink-0 md:w-16">
                <ProfileImage src={imagePath} alt="Profile Image" />
              </div>
              <div className="flex flex-col">
                {name ? (
                  <h3 className="pb-2 pt-4 font-inter text-base font-semibold leading-normal md:pt-0 md:text-lg">
                    {name}
                  </h3>
                ) : null}
                {biography ? <Markdown content={biography} className="profile" /> : null}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
);

Profile.displayName = "Profile";
