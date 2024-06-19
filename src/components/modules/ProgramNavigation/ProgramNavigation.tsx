import React from "react";
import cn from "@/utils/cn";

import ProgramNavigationBody, { type ProgramNavigationBodyProps as BodyProps } from "./ProgramNavigationContent";
import ProgramNavigationAction, { type ProgramNavigationActionProps as ActionProps } from "./ProgramNavigationAction";
import ProgramNavigationLinks, { type ProgramNavigationLinksProps as LinkProps } from "./ProgramNavigationLinks";

export type ProgramNavigationBodyProps = BodyProps;
export type ProgramNavigationActionProps = ActionProps;
export type ProgramNavigationLinkProps = LinkProps;

export type ProgramNavigationProps = React.HTMLAttributes<HTMLDivElement> & {
  action?: {
    name: string;
    href: string;
  };
  navigation?: {
    name: string;
    href: string;
    level: number;
  }[];
};

const ProgramNavigation = React.forwardRef<HTMLDivElement, ProgramNavigationProps>(
  ({ className, ...props }, ref): JSX.Element => {
    return (
      <div
        aria-label="Program Navigation"
        {...props}
        className={cn(
          "sticky top-0 z-20 w-full border-b border-solid border-gray-200 bg-white py-2 drop-shadow",
          className
        )}
        ref={ref}
      />
    );
  }
);

ProgramNavigation.displayName = "ProgramNavigation";

export default Object.assign(ProgramNavigation, {
  Actions: ProgramNavigationAction,
  Body: ProgramNavigationBody,
  Links: ProgramNavigationLinks,
});
