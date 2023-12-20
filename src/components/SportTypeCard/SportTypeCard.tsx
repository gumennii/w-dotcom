import React from "react";
import {
  SportTypeCardTitle,
  type SportTypeCardTitleProps as TitleProps,
} from "./SportTypeCardTitle";

import cn from "~/utils/style";

export type SportTypeCardTitleProps = TitleProps;

export type SportTypeCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "vertical" | "horizontal";
};

const variantMap = {
  vertical:
    "px-8 py-8 rounded-2xl shadow flex flex-col justify-center items-center gap-2",
  horizontal: "p-4 rounded-2xl shadow flex justify-center items-center gap-4",
};

const SportTypeCard = React.forwardRef<HTMLDivElement, SportTypeCardProps>(
  ({ className, variant = "vertical", ...props }, ref): JSX.Element => {
    return (
      <div
        aria-label="Sport type card"
        {...props}
        className={cn(variantMap[variant], className)}
        ref={ref}
      />
    );
  },
);

export default Object.assign(SportTypeCard, {
  Title: SportTypeCardTitle,
});
