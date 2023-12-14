import React from "react";

interface ButtonProps {
  /**
   * Button variant
   */
  variant?: "solid" | "outlined" | "default" | "icon";
  /**
   * How large should the button be?
   */
  size?: "regular" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Disabled button state
   */
  disabled?: boolean;
}

const sizeMap = {
  regular: "",
  large: "btn-lg",
};

const variantMap = {
  default: "btn-primary",
  solid: "btn-secondary",
  outlined: "btn-outline",
  icon: "btn-accent rounded-full",
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "default",
  size = "regular",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`btn ${variantMap[variant]} ${sizeMap[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};
