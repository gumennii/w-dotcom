import React from 'react';
import { ProductCardBody, type ProductCardBodyProps as BodyProps } from './ProductCardBody';
import { ProductCardTitle, type ProductCardTitleProps as TitleProps } from './ProductCardTitle';
import { ProductCardImage, type ProductCardImageProps as ImageProps } from './ProductCardImage';
import cn from '~/utils/style';

export type ProductCardBodyProps = BodyProps
export type ProductCardTitleProps = TitleProps
export type ProductCardImageProps = ImageProps

export type ProductCardProps = React.HTMLAttributes<HTMLDivElement> &
{
  bordered?: boolean;
};

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    { bordered = false, className, ...props }, ref
  ): JSX.Element => {
    return (
      <div
        aria-label="Product card"
        {...props}
        className={cn({'card-bordered': bordered}, 'card', 'product', 'w-40 sm:w-56 lg:w-96', className)}
        ref={ref}
      />
    );
  }
);

export default Object.assign(ProductCard, {
  Body: ProductCardBody,
  Title: ProductCardTitle,
  Image: ProductCardImage,
});
