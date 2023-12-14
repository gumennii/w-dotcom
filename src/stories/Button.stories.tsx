import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};


export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "accent",
    label: "",
    icon: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};


export const DisabledSolid: Story = {
  args: {
    variant: "solid",
    label: "Button",
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  args: {
    variant: "outlined",
    label: "Button",
    disabled: true,
  },
};

const variants = ["default", "solid", "outlined", "accent"];
const sizes = ["default", "large"];

export const Examples: Story = {
  args: {
    variant: "outlined",
    label: "Delete now",
  },
  render: () => {
    return (
      <>
        <div className="flex flex-row gap-5">
          {variants.map((variant) => (
            <div className="flex flex-col items-center gap-5">
              <p className="text-center">{variant}</p>
              {sizes.map((size) => (
                <div title={`variant: ${variant}, size: ${size}`}>
                  <Button
                    label="Button"
                    size={size as keyof typeof Button}
                    variant={variant as keyof typeof Button}
                  />
                </div>
              ))}
              <div title={`variant: ${variant}, size: default, disabled: true`}>
                <Button
                  label="Button"
                  disabled
                  variant={variant as keyof typeof Button}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  },
};
