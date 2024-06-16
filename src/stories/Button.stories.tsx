import type { Meta, StoryFn as Story } from "@storybook/react";
import { Button, ButtonProps } from "@/components/ui";
import { Container } from "@/components/ui";
import { MaxWidth } from "@/utils/styling";

const buttonStyleOptions = ["primary", "secondary", "accent", "ghost", "outline", "link"];
const buttonSizeOptions = ["large", "regular", "small"];

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

export default {
  title: "Actions/Button",
  argTypes,
  component: Button,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<ButtonProps> = (args: ButtonProps) => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <Button {...args} />
    </Container>
  );
};

Default.args = BASE_PROPS;

export const ActiveButtons: Story<ButtonProps> = (args: ButtonProps) => {
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
};

ActiveButtons.args = BASE_PROPS;

export const ButtonSizes: Story<ButtonProps> = (args: ButtonProps) => {
  return (
    <Container maxWidth={MaxWidth.Small} className="space-x-4">
      <Button {...args} copy="Primary" size="large" />
      <Button {...args} copy="Secondary" />
      <Button {...args} copy="Accent" size="small" />
    </Container>
  );
};

ButtonSizes.args = BASE_PROPS;
