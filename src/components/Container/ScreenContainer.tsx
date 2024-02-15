import { FC } from "react";
import cn from "@/utils/cn";
import { BaseContainer } from "./BaseContainer";
import { ContainerProps } from "./";

export const ScreenContainer: FC<ContainerProps> = ({ children, className, maxWidth }) => (
  <BaseContainer className={cn(className)} maxWidth={maxWidth}>
    {children}
  </BaseContainer>
);
