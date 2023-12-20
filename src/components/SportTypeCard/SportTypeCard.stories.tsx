import React from "react";
import type { StoryFn as Story, Meta } from "@storybook/react";

// import SportTypeCard, { type SportTypeCardProps } from ".";
import { SportTypeCard, type SportTypeCardProps } from "./SportTypeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFootball } from "@fortawesome/free-solid-svg-icons";

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
    <SportTypeCard {...args} path="/" className="bg-secondary text-white">
      <FontAwesomeIcon icon={faFootball} className="h-10 w-10 p-1" />
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
      variant="horizontal"
      className="bg-secondary text-white"
    >
      <FontAwesomeIcon icon={faFootball} className="h-10 w-10 p-1 " />
      <span className="text-center text-4xl font-bold uppercase">
        Flag Football
      </span>
    </SportTypeCard>
  );
};
