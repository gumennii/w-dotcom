import React, { forwardRef } from "react";
import cn from "~/utils/style";

// import { IComponentBaseProps } from "../types";
import CollapseTitle from "./CollapseTitle";
import CollapseContent from "./CollapseContent";

export type AccordionProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "type"
> & {
  name?: string;
  //   icon?: "arrow" | "plus";
};

const Accordion = forwardRef<HTMLInputElement, AccordionProps>(
  ({ name = "accordion", className, children, ...props }, ref): JSX.Element => {
    return (
      <div
        className={cn(
          "collapse",
          "collapse-arrow",
          "max-w-7xl rounded-none border-b border-neutral-300 bg-transparent",
          className,
        )}
      >
        <input {...props} ref={ref} type="checkbox" name={name} />
        {children}
      </div>
    );
  },
);

Accordion.displayName = "Accordion";

export default Object.assign(Accordion, {
  Title: CollapseTitle,
  Content: CollapseContent,
});
