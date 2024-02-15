import React from "react";

import { Button, type ButtonProps } from "@/components/Button";

export type DropdownToggleProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "color"> & {
  style?: ButtonProps["style"];
  size?: ButtonProps["size"];
  button?: boolean;
  disabled?: boolean;
  children: string;
};

const DropdownToggle = ({
  children,
  style = "outline",
  size,
  button = true,
  className,
  disabled,
  ...props
}: DropdownToggleProps) => {
  return (
    <label tabIndex={0} className={className} {...props}>
      {button ? <Button size={size} disable={disabled} copy={children} style="primary" /> : children}
    </label>
  );
};

export default DropdownToggle;
