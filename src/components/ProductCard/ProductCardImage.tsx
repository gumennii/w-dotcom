import React from 'react';
import Image from 'next/image';

export type ProductCardImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const ProductCardImage = React.forwardRef<HTMLElement, ProductCardImageProps>(
  ({ ...props }, ref) => {
    return (
      <div className='product-image'>
        <figure ref={ref}>
          <img {...props}/>
        </figure>
      </div>
    );
  }
);
