import classNames from "classnames";
import { getTypographyClass } from "@/utils/styling";

type TestBlockProps = {
  type: Types.TypographyType;
  children: React.ReactNode;
  className?: string;
};

export const Text = ({ type, children, className }: TestBlockProps) => {
  if (type === "h1" || type === "h2" || type === "h3") {
    return <h2 className={classNames(getTypographyClass(type), className)}>{children}</h2>;
  } else if (type === "h4" || type === "h5") {
    return <h4 className={classNames(getTypographyClass(type), className)}>{children}</h4>;
  } else {
    return <p className={classNames(getTypographyClass(type), className)}>{children}</p>;
  }
};
