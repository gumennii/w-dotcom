import React, { type ElementType } from "react";
import cn from "~/utils/style";

export type SportTypeCardTitleProps = React.HTMLAttributes<HTMLDivElement> & {
  tag?: ElementType;
};

export const SportTypeCardTitle = React.forwardRef<
  HTMLElement,
  SportTypeCardTitleProps
>(({ className, tag = "div", ...props }, ref) => {
  const Tag = tag;

  return (
    <Tag
      {...props}
      className={cn("text-center text-4xl font-bold uppercase", className)}
      ref={ref}
    />
  );
});
