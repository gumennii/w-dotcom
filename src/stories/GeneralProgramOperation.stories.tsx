import type { Meta, StoryObj } from "@storybook/react";

import { GeneralProgramOperation } from "@/components/modules";

const meta = {
  title: "Modules/Program Operation Info",
  component: GeneralProgramOperation,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GeneralProgramOperation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    coverVideo: "https://vimeo.com/308641227",
    programType: "(Some Program Type)",
    slug: "slug",
  },
};
