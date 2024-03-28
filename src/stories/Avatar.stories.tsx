import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@/components/ui";

const meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Avatar Name",
    picture: { url: "/avatar.jpg" },
  },
};
