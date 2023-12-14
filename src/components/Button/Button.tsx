import React from "react";

interface ButtonProps {
  /**
   * Button variant
   */
  variant?: "solid" | "outlined";
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
  solid: "",
  outlined: "btn-outline btn-neutral",
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "solid",
  size = "regular",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`btn uppercase ${variantMap[variant]} ${sizeMap[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};
