import React from "react";
import cn from "@/utils/cn";
import { ProfileImage, type ProfileImageProps as ImageProps } from "./ProfileImage";
import { TypePeople } from "@/types/contentful";
import { Asset } from "contentful";
import { Markdown } from "@/lib/markdown";

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
        <h2 className="font-sant mb-4 text-xl font-bold leading-normal md:text-2xl lg:text-3xl">{title}</h2>

        <div className="flex flex-col gap-x-6 md:flex-row lg:flex-row">
          <div className="flex w-full shrink-0 flex-col md:w-36">
            <ProfileImage src={imagePath} alt="Profile Image" />
            <h3 className="mt-2 hidden text-lg font-semibold md:block lg:hidden">{name ? name : "Person name"}</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="pb-2 pt-4 font-semibold leading-normal md:hidden lg:block lg:pt-0 lg:text-lg">
              {name ? name : "Person name"}
            </h3>
            {biography ? <Markdown content={{ string: biography }} /> : <p className="text-sm">Person biography</p>}
          </div>
        </div>
      </div>
    );
  }
);

Profile.displayName = "Profile";
