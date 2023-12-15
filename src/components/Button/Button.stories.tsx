import type { Meta, StoryFn as Story, } from "@storybook/react";

import { Button, type ButtonProps} from "./Button";

const meta = {
  title: "Actions/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>
}

export const ActiveButtons: Story<ButtonProps> = (args) => {
  return (
    <div className="flex items-center gap-4">
      <Button {...args}>Default</Button>
      <Button {...args} variant="solid">
        Solid
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="accent">
        Accent
      </Button>
    </div>
  )
}
ActiveButtons.args = {}

export const ButtonSizes: Story<ButtonProps> = (args) => {
  return (
    <div className="flex items-center gap-4">
      <Button {...args} size="large">
        Large
      </Button>
      <Button {...args}>Normal</Button>
      <Button {...args} size="small">
        Small
      </Button>
    </div>
  )
}
ButtonSizes.args = {}

export const IconButtons: Story<ButtonProps> = (args) => {
  return (
    <div className="flex items-center gap-4">
      <Button {...args} icon>Default</Button>
      <Button {...args} variant="solid" icon>
        Solid
      </Button>
      <Button {...args} variant="outlined" icon>
        Outlined
      </Button>
      <Button {...args} variant="accent" icon>
        Accent
      </Button>
    </div>
  )
}
IconButtons.args = {}

export const DisabledButtons: Story<ButtonProps> = (args) => {
  return (
    <div className="flex items-center gap-4">
      <Button {...args}>Disabled Default</Button>
      <Button {...args} variant="solid">
        Disabled Solid
      </Button>
      <Button {...args} variant="outlined">
        Disabled Outlined
      </Button>
      <Button {...args} variant="accent">
        Disabled Accent
      </Button>
    </div>
  )
}
DisabledButtons.args = {
  disabled: true,
}
