import React from "react";

import  Button, { type ButtonProps } from "../Button";

export type DropdownToggleProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  "color"
> & {
  color?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  button?: boolean;
  disabled?: boolean;
  children: string;
};

const DropdownToggle = ({
  children,
  color = "outlined",
  size,
  button = true,
  className,
  disabled,
  ...props
}: DropdownToggleProps) => {
  return (
    <label tabIndex={0} className={className} {...props}>
      {button ? (
        <Button variant={color} size={size} disabled={disabled}>
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  );
};

export default DropdownToggle;
