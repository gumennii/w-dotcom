import { FC } from "react";
import classNames from "classnames";

const getDividerColorStyle = (style: Types.AvailableColor) => {
  switch (style) {
    case "primary":
      return "border-primary";
    case "secondary":
      return "border-secondary";
    case "accent":
      return "border-accent";
    case "base-200":
      return "border-base-200";
    case "base-300":
      return "border-base-300";
    default:
      return "border-neutral-300";
  }
};

export type DividerProps = {
  color?: Types.AvailableColor;
  thickness?: number;
  className?: string;
};

export const Divider: FC<DividerProps> = ({ color, thickness, className }) => (
  <div
    className={classNames("my-2 w-full", color ? getDividerColorStyle(color) : "border-neutral-300", className)}
    style={{ borderWidth: thickness ? thickness : 1 }}
  />
);
