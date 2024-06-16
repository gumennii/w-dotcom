import type { Meta, StoryFn as Story } from "@storybook/react";
import { Table, TableProps } from "@/components/ui";

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

export default {
  title: "Data Display/Table",
  argTypes,
  component: Table,
} as Meta;

export const Default: Story<TableProps> = (args: TableProps) => {
  return <Table {...args} />;
};

Default.args = BASE_PROPS;
