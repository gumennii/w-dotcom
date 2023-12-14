import React from "react";

interface ButtonProps {
  /**
   * Button variant
   */
  variant?: "solid" | "outlined" | "default" | "accent";
  /**
   * How large should the button be?
   */
  size?: "regular" | "large";
  /**
   * Button contents
   */
  label: string;

  icon?: boolean;
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
  default: "btn-primary bg-primary-focus hover:bg-primary",
  solid: "btn-secondary",
  outlined: "btn-outline",
  accent: "btn-accent",
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "default",
  size = "regular",
  icon,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`btn ${variantMap[variant]} ${sizeMap[size]} ${icon ? "btn-icon" : null}`}
      {...props}
    >
      {icon ? <Icon /> : label}
    </button>
  );
};

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
      <path d="M6.32031 17.7593L14.3203 25.7593L26.3203 7.75928" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
