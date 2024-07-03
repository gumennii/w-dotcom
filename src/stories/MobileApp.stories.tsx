import type { StoryFn as Story, Meta } from "@storybook/react";

import MobileApp, { MobileAppProps } from "../components/modules/MobileApp";

const argTypes = {
  title: { control: "text" },
  subtitle: { control: "text" },
};

export default {
  title: "Data Display/Mobile App",
  argTypes,
  component: MobileApp,
} as Meta;

export const MobileAppDefault: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

export const MobileAppLayoutLeft: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

MobileAppLayoutLeft.args = {
  layout: "leftTop",
};
