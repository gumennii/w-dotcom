import type { Meta, StoryFn as Story } from "@storybook/react";

import { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";

import { Hero, HeroProps } from "@/components/ui";

const document = {
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Hello",
          data: {},
          marks: [{ type: "bold" }],
        },
        {
          nodeType: "text",
          value: " world!",
          data: {},
          marks: [{ type: "italic" }],
        },
      ],
    },
  ],
};

const BASE_PROPS: Omit<HeroProps, "component"> = {
  programName: "2024 Advanced Volleyball - Tracy HS",
  programType: "Volleyball",
  urlVideo:
    "https://player.vimeo.com/video/906084642?title=0&byline=0&portrait=0&playsinline=0&autopause=0&controls=0&app_id=122963",
  heroDescr: document as Document,
  backgroundImage: {} as Asset,
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
