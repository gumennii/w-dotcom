import React from "react";
import cn from "@/utils/cn";
import { ProfileImage, type ProfileImageProps as ImageProps } from "./ProfileImage";
import { TypePeople } from "@/types/contentful";
import { Asset } from "contentful";

export type ProfileImageProps = ImageProps;

export type ProfileProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  contents: TypePeople<undefined, string>;
  className?: string;
};

const Profile = React.forwardRef<HTMLDivElement, ProfileProps>(
  ({ title, contents, className, ...props }, ref): JSX.Element => {
    const { name, biography } = contents.fields;
    const photo = contents.fields.photo as Asset;
    const imagePath = photo ? (photo.fields.file?.url as string) : "/avatar.jpg";
    return (
      <div aria-label="Profile" {...props} className={cn("text-primary w-full lg:max-w-7xl", className)} ref={ref}>
        <h2 className="font-sant leading-normal font-bold text-xl md:text-2xl lg:text-3xl mb-4">{title}</h2>

        <div className="flex flex-col md:flex-row lg:flex-row gap-x-6">
          <div className="flex flex-col w-full md:w-40 lg:w-52 shrink-0">
            <ProfileImage src={imagePath} alt="Profile Image" />
            <h3 className="hidden md:block lg:hidden mt-2 text-lg font-semibold">{name ? name : "Person name"}</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="pt-4 pb-2 lg:pt-0 md:hidden lg:block font-semibold leading-normal lg:text-lg">
              {name ? name : "Person name"}
            </h3>
            <p className="text-sm">{biography ? biography : "Person biography"}</p>
          </div>
        </div>
      </div>
    );
  }
);

Profile.displayName = "Profile";

export default Profile;
