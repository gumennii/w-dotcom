import { Dropdown, DropdownProps } from "@/components/ui";
import type { StoryFn as Story, Meta } from "@storybook/react";

export default {
  title: "Actions/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<DropdownProps> = args => {
  return (
    <div className="my-32">
      <Dropdown {...args}>
        <Dropdown.Toggle>Click me</Dropdown.Toggle>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
Default.args = {};
