import React from "react";
import { twMerge } from "tailwind-merge";
import cn from "~/utils/style";

export type AccordionCollapseTitleProps<
  T extends HTMLElement = HTMLDivElement,
> = React.HTMLAttributes<T>;

const AccordionCollapseTitle = ({
  children,
  className,
  ...props
}: AccordionCollapseTitleProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(
        "collapse-title",
        "text-2xl font-medium after:text-neutral-300",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AccordionCollapseTitle;
