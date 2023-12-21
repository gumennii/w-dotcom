import React from "react";
// import cn from "~/utils/style";
import { Button } from "../Button";

export type ProgramNavigationActionProps =
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "solid" | "outlined" | "default" | "accent";
    size?: "regular" | "large" | "small";
    children?: string;
    onClick?: () => void;
  };

const ProgramNavigationAction = React.forwardRef<
  HTMLDivElement,
  ProgramNavigationActionProps
>(
  (
    {
      className,
      variant = "solid",
      size = "regular",
      children = "Button",
      ...props
    },
    ref,
  ): JSX.Element => {
    return (
      <div {...props} className={className} ref={ref}>
        <Button variant={variant} size={size}>
          {children}
        </Button>
      </div>
    );
  },
);

export default ProgramNavigationAction;
