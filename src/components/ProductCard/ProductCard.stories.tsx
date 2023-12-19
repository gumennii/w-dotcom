import React from "react";
import type { StoryFn as Story, Meta } from "@storybook/react";

import ProductCard, { type ProductCardProps } from ".";

export default {
  title: "Data Display/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

export const Default: Story<ProductCardProps> = (args) => {
  return (
    <ProductCard {...args}>
      <ProductCard.Image
        src="https://placehold.co/400?text=Product+Image&font=roboto"
        alt="Product Name"
      />
      <ProductCard.Body>
        <ProductCard.Title tag="h2">Product Name</ProductCard.Title>
        <p>$ 19.00</p>
      </ProductCard.Body>
    </ProductCard>
  );
};
