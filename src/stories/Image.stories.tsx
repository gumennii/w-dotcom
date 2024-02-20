import type { Meta, StoryObj } from "@storybook/react";
import { Image, ImageProps } from "@/components";

const meta: Meta<typeof Image> = {
  title: "Data Display/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

const BASE_PROPS: Omit<ImageProps, "component"> = {
  width: 400,
  height: 400,
  src: "https://placehold.co/400?text=Placeholder+Image&font=roboto",
};

const renderStory = (args: ImageProps) => {
  return <Image {...args} alt="Story Book image" />;
};

export const Default: Story = {
  args: BASE_PROPS,
  render: renderStory,
};
