import React from "react";
import type { StoryFn as Story, Meta } from "@storybook/react";
import { faBaseball, faFootball } from "@fortawesome/free-solid-svg-icons";

import { SportTypeCard, type SportTypeCardProps } from "./SportTypeCard";

export default {
  title: "Data Display/SportTypeCard",
  component: SportTypeCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

export const Default: Story<SportTypeCardProps> = (args) => {
  return (
    <SportTypeCard
      {...args}
      path="/"
      icon={faFootball}
      className="bg-secondary text-white"
    >
      <span className="text-center text-4xl font-bold uppercase">
        Flag Football
      </span>
    </SportTypeCard>
  );
};

export const Horizontal: Story<SportTypeCardProps> = (args) => {
  return (
    <SportTypeCard
      {...args}
      path="/"
      icon={faBaseball}
      className="bg-secondary text-white"
    >
      <span className="text-center text-4xl font-bold uppercase">Baseball</span>
    </SportTypeCard>
  );
};
