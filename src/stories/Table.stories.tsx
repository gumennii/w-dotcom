import { Table, TableProps } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

const BASE_PROPS: TableProps = {
  size: "full",
  textAlign: "center",
  data: [
    {
      division: "5th/6th",
      GameTime: "10:00 AM",
      TeamSize: 48,
      TeamCount: 4,
      PracticeTime: "09:00:00.000",
      DivisionId: "41282348",
    },
    {
      division: "7th/8th",
      GameTime: "12:00 PM",
      TeamSize: 48,
      TeamCount: 4,
      PracticeTime: "11:00:00.000",
      DivisionId: "41282349",
    },
    {
      division: "5th/6th",
      GameTime: "10:00 AM",
      TeamSize: 48,
      TeamCount: 4,
      PracticeTime: "09:00:00.000",
      DivisionId: "41282348",
    },
    {
      division: "7th/8th",
      GameTime: "12:00 PM",
      TeamSize: 48,
      TeamCount: 4,
      PracticeTime: "11:00:00.000",
      DivisionId: "41282349",
    },
    {
      division: "5th/6th",
      GameTime: "10:00 AM",
      TeamSize: 48,
      TeamCount: 4,
      PracticeTime: "09:00:00.000",
      DivisionId: "41282348",
    },
    {
      division: "7th/8th",
      GameTime: "12:00 PM",
      TeamSize: 48,
      TeamCount: 4,
      PracticeTime: "11:00:00.000",
      DivisionId: "41282349",
    },
  ],
};

const argTypes = {
  size: { control: "select", options: ["tiny", "small", "normal", "large", "full"] },
  textAlign: { control: "select", options: ["left", "center", "right"] },
};

const renderStory = (args: TableProps) => {
  return <Table {...args} />;
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};
