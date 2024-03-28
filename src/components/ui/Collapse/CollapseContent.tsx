import React from "react";
import cn from "@/utils/cn";

export type CollapseContentProps = React.HTMLAttributes<HTMLDivElement>;

const CollapseContent = React.forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    return (
      <div {...props} className={cn("collapse-content", "text-base", className)}>
        {children}
      </div>
    );
  }
);

CollapseContent.displayName = "CollapseContent";

export default CollapseContent;
