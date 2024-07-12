import { FC } from "react";
import classNames from "classnames";

const getDividerColorStyle = (style: Types.AvailableColor) => {
  switch (style) {
    case "primary":
      return "bg-primary";
    case "secondary":
      return "bg-secondary";
    case "accent":
      return "bg-accent";
    case "base-200":
      return "bg-base-200";
    case "base-300":
      return "bg-base-300";
    default:
      return "bg-neutral-300";
  }
};

export type DividerProps = {
  color?: Types.AvailableColor;
  thickness?: number;
  className?: string;
};

export const Divider: FC<DividerProps> = ({ color, thickness, className }) => (
  <div
    className={classNames("my-2 w-full", color ? getDividerColorStyle(color) : "bg-neutral-300", className)}
    style={{ height: thickness ? thickness : 1 }}
  />
);
