import type { StoryFn as Story, Meta } from "@storybook/react";

import MobileApp, { MobileAppProps } from "../components/modules/MobileApp";
import { AppsLinks } from "../components/modules/MobileApp/_constants";

const appsLinks: AppsLinks[] = [
  {
    href: "#",
    src: "/icons/app-store.svg",
    alt: "App Store",
  },
  {
    href: "#",
    src: "/icons/google-play.svg",
    alt: "Google Play",
  },
];

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

MobileAppDefault.args = {
  appsLinks,
};

export const MobileAppLayoutLeft: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

MobileAppLayoutLeft.args = {
  layout: "leftTop",
};
