import React from "react";

export interface ButtonProps {
  variant?: "solid" | "outlined" | "default" | "accent";
  size?: "regular" | "large" | "small";
  children: string;
  icon?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const sizeMap = {
  regular: "",
  large: "btn-lg",
  small: "btn-sm",
};

const variantMap = {
  default: "btn-primary hover:bg-primary",
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
  children,
  ...props
}: ButtonProps) => {
  if (icon) {
    return (
      <button
        type="button"
        className={`btn ${variantMap[variant]} ${sizeMap[size]} btn-icon`}
        {...props}
      >
        {<Icon />}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className={`btn ${variantMap[variant]} ${sizeMap[size]}`}
        {...props}
      >
        {children}
      </button>
    );
  }
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        d="M6.32031 17.7593L14.3203 25.7593L26.3203 7.75928"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
