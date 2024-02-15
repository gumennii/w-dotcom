import React from "react";
import cn from "@/utils/cn";

export type CollapseTitleProps = React.HTMLAttributes<HTMLDivElement>;

const CollapseTitle = React.forwardRef<HTMLDivElement, CollapseTitleProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    return (
      <div {...props} className={cn("collapse-title", "font-semibold, text-lg text-primary", className)}>
        {children}
      </div>
    );
  }
);

CollapseTitle.displayName = "CollapseTitle";

export default CollapseTitle;
