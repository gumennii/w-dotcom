import React from "react";
import type { Meta, StoryFn as Story } from "@storybook/react";
import { MaxWidth } from "@/utils/styling";
import { Container } from "@/components/ui";
import { SportTypeCard, type SportTypeCardProps } from "@/components/modules";

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

export default {
  title: "Data Display/SportTypeCard",
  argTypes,
  component: SportTypeCard,
} as Meta;

export const Default: Story<SportTypeCardProps> = (args: SportTypeCardProps) => {
  return (
    <Container className="flex flex-row justify-center" maxWidth={MaxWidth.Medium}>
      <SportTypeCard {...args} />
    </Container>
  );
};

Default.args = BASE_PROPS;

export const RowCards: Story<SportTypeCardProps> = (args: SportTypeCardProps) => {
  return (
    <Container className="flex flex-row justify-center space-x-4" maxWidth={MaxWidth.Medium}>
      <SportTypeCard {...args} path="/footbal" icon="footbal" title="FLAG FOOTBALL" />
      <SportTypeCard {...args} path="/basketball" icon="basketball" title="BASKETBALL" />
      <SportTypeCard {...args} path="/voleyblal" icon="volleyball" title="VOLLEYBALL" />
      <SportTypeCard {...args} path="/summer_camp" icon="flag-pennant" title="SUMMER CAMP" />
    </Container>
  );
};

RowCards.args = BASE_PROPS;
