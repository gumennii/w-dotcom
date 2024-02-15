import { FC } from "react";
import { MaxWidth, getMaxWidth } from "@/utils/styling";
import cn from "@/utils/cn";
import { ContainerProps } from "./";

export const BaseContainer: FC<ContainerProps> = ({ children, className, maxWidth = MaxWidth.Medium }) => (
  <div className={cn(getMaxWidth(maxWidth), className)}>{children}</div>
);
