import type { Meta, StoryFn as Story } from "@storybook/react";

import { Hero, HeroProps } from "@/components/ui";

const BASE_PROPS: Omit<HeroProps, "component"> = {
  programName: "2024 Advanced Volleyball - Tracy HS",
  programType: "Volleyball",
  urlVideo:
    "https://player.vimeo.com/video/906084642?title=0&byline=0&portrait=0&playsinline=0&autopause=0&controls=0&app_id=122963",
};

const argTypes = {
  programType: { control: "select", options: ["Basketball", "Camps", "Flag Football", "Volleyball", "None"] },
};

export default {
  title: "Modules/Hero",
  argTypes,
  component: Hero,
} as Meta;

export const Default: Story<HeroProps> = (args: HeroProps) => <Hero {...args} />;

Default.args = BASE_PROPS;
