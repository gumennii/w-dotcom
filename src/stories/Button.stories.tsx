import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@/components/ui";
import { Container } from "@/components/ui";
import { MaxWidth } from "@/utils/styling";

const buttonStyleOptions = ["primary", "secondary", "accent", "ghost", "outline", "link"];
const buttonSizeOptions = ["large", "regular", "small"];

const meta: Meta<typeof Button> = {
  title: "Actions/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const BASE_PROPS: Omit<ButtonProps, "component"> = {
  copy: "Click here",
  style: "primary",
  size: "regular",
};

const argTypes = {
  rounded: { control: "boolean" },
  style: { control: "select", options: buttonStyleOptions },
  size: { control: "select", options: buttonSizeOptions },
};

const renderStory = (args: ButtonProps) => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <Button {...args} />
    </Container>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};

export const ActiveButtons: Story = {
  args: BASE_PROPS,
  argTypes,
  render: (args: ButtonProps) => {
    return (
      <Container maxWidth={MaxWidth.Small} className="space-x-4">
        <Button {...args} copy="Primary" style="primary" />
        <Button {...args} copy="Secondary" style="secondary" />
        <Button {...args} copy="Accent" style="accent" />
        <Button {...args} copy="Outline" style="outline" />
        <Button {...args} copy="Ghost" style="ghost" />
        <Button {...args} copy="Link" style="link" />
      </Container>
    );
  },
};

export const ButtonSizes: Story = {
  args: BASE_PROPS,
  argTypes,
  render: (args: ButtonProps) => {
    return (
      <Container maxWidth={MaxWidth.Small} className="space-x-4">
        <Button {...args} copy="Primary" size="large" />
        <Button {...args} copy="Secondary" />
        <Button {...args} copy="Accent" size="small" />
      </Container>
    );
  },
};
