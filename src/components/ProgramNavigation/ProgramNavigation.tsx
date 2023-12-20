import React from "react";
import cn from "~/utils/style";

import ProgramNavigationBody, { type ProgramNavigationBodyProps as BodyProps } from "./ProgramNavigationContent";
import ProgramNavigationAction, { type ProgramNavigationActionProps as ActionProps } from "./ProgramNavigationAction";
import ProgramNavigationLink, { type ProgramNavigationLinkProps as LinkProps } from "./ProgramNavigationLink";

export type ProgramNavigationBodyProps = BodyProps;
export type ProgramNavigationActionProps = ActionProps;
export type ProgramNavigationLinkProps = LinkProps;

export type ProgramNavigationProps = React.HTMLAttributes<HTMLDivElement>;

const ProgramNavigation = React.forwardRef<HTMLDivElement, ProgramNavigationProps>(
  ({ className, ...props }, ref): JSX.Element => {
    return (
      <div
        aria-label="Program Navigation"
        {...props}
        className={cn(
          "w-full border-b border-gray-200 border-solid drop-shadow bg-inherit py-2",
          className,
        )}
        ref={ref}
      />
    );
  },
);

export default Object.assign(ProgramNavigation, {
  Actions: ProgramNavigationAction,
  Body: ProgramNavigationBody,
  Link: ProgramNavigationLink,
});
