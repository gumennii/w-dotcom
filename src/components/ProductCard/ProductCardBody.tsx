import React from "react";
import cn from "~/utils/style";

export type ProductCardBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const ProductCardBody = React.forwardRef<
  HTMLDivElement,
  ProductCardBodyProps
>(({ className, ...props }, ref) => (
  <div
    {...props}
    className={cn(
      "card-body",
      "product-body",
      "items-center gap-2 p-2 text-center text-sm sm:text-base lg:gap-4 lg:p-4 lg:text-lg",
      className,
    )}
    ref={ref}
  />
));
