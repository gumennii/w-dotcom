import type { StoryFn as Story, Meta } from "@storybook/react";
import { images } from "../components/modules/CallToAction/_constants";
import { CallToAction, type CallToActionProps } from "@/components/modules";

const argTypes = {
  introText: { control: "text" },
  title: { control: "text" },
  subtitle: { control: "text" },
};

export default {
  title: "Data Display/Call To Action",
  argTypes,
  component: CallToAction,
} as Meta;

export const CallToActionDefault: Story<CallToActionProps> = args => {
  return <CallToAction {...args}></CallToAction>;
};

CallToActionDefault.args = {
  title: "We’re here to help.",
  subtitle:
    "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.",
  className: "text-white bg-primary",
  buttonData: {
    name: "Visit the help center",
    url: "#",
  },
};

export const CallToActionLayoutLeft: Story<CallToActionProps> = args => {
  return <CallToAction {...args}></CallToAction>;
};

CallToActionLayoutLeft.args = {
  introText: "About Next Level Sports",
  className: "text-primary",
  images,
};
