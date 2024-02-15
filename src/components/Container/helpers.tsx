import { FC } from "react";
import cn from "@/utils/cn";
import {
  BackgroundTypes,
  getBackgroundClass,
  getMarginBottomClass,
  getMarginTopClass,
  getPaddingBottomClass,
  getPaddingTopClass,
} from "@/utils/styling";
import { ContainerProps } from "./";

type BackgroundWrapperProps = Required<Omit<ContainerProps, "maxWidth" | "className" | "id">>;

export const BackgroundWrapper: FC<Omit<BackgroundWrapperProps, "containerVariant">> = ({
  backgroundType = BackgroundTypes.Transparent,
  paddingTop,
  paddingBottom,
  marginTop,
  marginBottom,
  children,
  backgroundClassName,
}) => {
  return BackgroundTypes[backgroundType] ? (
    <div
      className={cn(
        getBackgroundClass(backgroundType),
        getPaddingTopClass(paddingTop),
        getPaddingBottomClass(paddingBottom),
        getMarginTopClass(marginTop),
        getMarginBottomClass(marginBottom),
        backgroundClassName
      )}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};
