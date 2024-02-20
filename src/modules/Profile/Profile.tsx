import React from "react";
import cn from "@/utils/cn";
import { ProfileImage, type ProfileImageProps as ImageProps } from "./ProfileImage";

export type ProfileImageProps = ImageProps;

export type ProfileProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  name: string;
  imagePath: string;
  content: string;
  className?: string;
};

const Profile = React.forwardRef<HTMLDivElement, ProfileProps>(
  ({ title, name, imagePath, content, className, ...props }, ref): JSX.Element => {
    return (
      <div aria-label="Profile" {...props} className={cn("text-primary w-full lg:max-w-7xl", className)} ref={ref}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold"> {title}</h2>

        <div className="flex flex-col md:flex-row lg:flex-row gap-x-6">
          <div className="flex flex-col w-full md:w-40 lg:w-52 shrink-0">
            <ProfileImage src={imagePath} alt="Profile Image" />
            <h3 className="hidden md:block lg:hidden mt-2 text-lg font-semibold">{name}</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="pt-4 pb-2 lg:pt-0 md:hidden lg:block text-base lg:text-xl font-semibold">{name}</h3>
            <p className="text-sm lg:text-base">{content}</p>
          </div>
        </div>
      </div>
    );
  }
);

Profile.displayName = "Profile";

export default Profile;
