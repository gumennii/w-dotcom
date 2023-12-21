import React from "react";
import cn from "~/utils/style";

export type AccordionCollapseContentProps =
  React.HTMLAttributes<HTMLDivElement>;

const AccordionCollapseContent = ({
  children,
  className,
  ...props
}: AccordionCollapseContentProps): JSX.Element => {
  return (
    <div {...props} className={cn("collapse-content", className)}>
      {children}
    </div>
  );
};

export default AccordionCollapseContent;
