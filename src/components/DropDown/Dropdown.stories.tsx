import React from "react";
import type { StoryFn as Story, Meta } from "@storybook/react";

import Dropdown, { type DropdownProps } from ".";

export default {
  title: "Actions/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<DropdownProps> = (args) => {
  return (
    <div className="my-32">
      <Dropdown {...args}>
        <Dropdown.Toggle>Click</Dropdown.Toggle>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
Default.args = {};
