import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MaxWidth } from "@/utils/styling";
import { Container } from "@/components/ui";
import { SportTypeCard, type SportTypeCardProps } from "@/components/modules";

const meta: Meta<typeof SportTypeCard> = {
  title: "Data Display/SportTypeCard",
  component: SportTypeCard,
};

export default meta;

type Story = StoryObj<typeof SportTypeCard>;

const BASE_PROPS: Omit<SportTypeCardProps, "component"> = {
  path: "/",
  title: "Flag Football",
  icon: "footbal",
};

const argTypes = {
  icon: {
    control: "select",
    options: ["footbal", "basketball", "volleyball", "futboll", "flag-pennant", "baseball"],
  },
};

const renderStory = (args: SportTypeCardProps) => {
  return (
    <Container className="flex flex-row justify-center" maxWidth={MaxWidth.Medium}>
      <SportTypeCard {...args} />
    </Container>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};

export const RowCards: Story = {
  args: BASE_PROPS,
  argTypes,
  render: (args: SportTypeCardProps) => {
    return (
      <Container className="flex flex-row justify-center space-x-4" maxWidth={MaxWidth.Medium}>
        <SportTypeCard {...args} path="/footbal" icon="footbal" title="FLAG FOOTBALL" />
        <SportTypeCard {...args} path="/basketball" icon="basketball" title="BASKETBALL" />
        <SportTypeCard {...args} path="/voleyblal" icon="volleyball" title="VOLLEYBALL" />
        <SportTypeCard {...args} path="/summer_camp" icon="flag-pennant" title="SUMMER CAMP" />
      </Container>
    );
  },
};
