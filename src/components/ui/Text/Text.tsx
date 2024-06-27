import { getTypographyClass } from "@/utils/styling";
import cn from "@/utils/cn";

export type TextProps = {
  type: Types.TypographyType;
  children: React.ReactNode;
  className?: string;
};

export const Text = ({ type, children, className }: TextProps) => {
  if (type === "h1" || type === "h2" || type === "h3") {
    return <h2 className={cn(getTypographyClass(type), className)}>{children}</h2>;
  } else if (type === "h4" || type === "h5") {
    return <h4 className={cn(getTypographyClass(type), className)}>{children}</h4>;
  } else {
    return <p className={cn(getTypographyClass(type), className)}>{children}</p>;
  }
};
