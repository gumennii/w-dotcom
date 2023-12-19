import React from 'react';
import type { StoryFn as Story, Meta } from '@storybook/react';

import ProductCard, { type ProductCardProps } from '.';

export default {
  title: 'Data Display/ProductCard',
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

const image = {
  src: '/image/product-card.jpg',
  alt: 'Product',
};

export const Default: Story<ProductCardProps> = (args) => {
  return (
    <ProductCard {...args}>
      <ProductCard.Image
        src={image.src}
        alt={image.alt}
      />
      <ProductCard.Body>
        <ProductCard.Title tag="h2">Product Name</ProductCard.Title>
        <p>$ 19.00</p>
      </ProductCard.Body>
    </ProductCard>
  );
};
