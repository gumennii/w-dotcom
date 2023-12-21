import React, { forwardRef } from "react";
import cn from "~/utils/style";

// import { IComponentBaseProps } from "../types";
import AccordionCollapseTitle from "./AccordionCollapseTitle";
import AccordionCollapseContent from "./AccordionCollapseContent";

export type AccordionProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "type"
> & {
  name?: string;
};

const Accordion = forwardRef<HTMLInputElement, AccordionProps>(
  ({ name = "accordion", className, children, ...props }, ref): JSX.Element => {
    return (
      <div
        className={cn(
          "collapse",
          "collapse-arrow",
          "max-w-sm rounded-none border-b border-neutral-300 bg-transparent sm:max-w-lg lg:max-w-4xl",
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
  Title: AccordionCollapseTitle,
  Content: AccordionCollapseContent,
});
