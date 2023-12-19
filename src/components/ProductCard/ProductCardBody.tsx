import React from 'react';
import cn from '~/utils/style';

export type ProductCardBodyProps = React.HTMLAttributes<HTMLDivElement>

export const ProductCardBody = React.forwardRef<HTMLDivElement, ProductCardBodyProps>(
  ({ className, ...props }, ref) => (
    <div
      {...props}
      className={cn('card-body', 'product-body', 'text-sm items-center text-center p-2 gap-2 sm:text-base lg:text-lg lg:p-4 lg:gap-4', className)}
      ref={ref}
    />
  )
);
