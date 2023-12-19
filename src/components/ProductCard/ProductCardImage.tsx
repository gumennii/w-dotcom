import React from 'react';

export type ProductCardImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const ProductCardImage = React.forwardRef<HTMLElement, ProductCardImageProps>(
  ({ ...props }, ref) => {
    return (
      <div className='product-image w-full rounded-2xl'>
        <figure ref={ref} className='block w-full rounded-2xl'>
          <img {...props}/>
        </figure>
      </div>
    );
  }
);
