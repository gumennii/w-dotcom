import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "@/components";

const meta = {
  title: "Modules/Banner",
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    programName: "Program Name",
    programType: "Program Type",
  },
};
