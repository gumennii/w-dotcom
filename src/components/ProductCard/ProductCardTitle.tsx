import React, {type ElementType } from 'react';
import cn from '~/utils/style'

export type ProductCardTitleProps = React.HTMLAttributes<HTMLDivElement> &
  {
    tag?: ElementType
  }

export const ProductCardTitle = React.forwardRef<HTMLElement, ProductCardTitleProps>(
  ({ className, tag = 'div', ...props }, ref) => {
    const Tag = tag

    return (
      <Tag
        {...props}
        className={cn('card-title', 'product-title', 'text-base sm:text-2xl lg:text-3xl', className)}
        ref={ref}
      />
    )
  }
)