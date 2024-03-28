import { MaxWidth, getMaxWidth } from "@/utils/styling";
import cn from "@/utils/cn";

type ContainerProps = {
  className?: string;
  maxWidth: MaxWidth;
  children: React.ReactNode;
};

export const Container = ({ children, className, maxWidth = MaxWidth.Medium }: ContainerProps) => (
  <div className={cn(getMaxWidth(maxWidth), "px-4 lg:px-0", className)}>{children}</div>
);
