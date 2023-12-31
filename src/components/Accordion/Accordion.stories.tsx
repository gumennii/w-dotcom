import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";

import Accordion, { AccordionProps } from ".";

export default {
  title: "Data Display/Accordion",
  component: Accordion,
} as Meta;

export const Default: Story<AccordionProps> = (args) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Accordion {...args} defaultChecked>
        <Accordion.Title>Grade Based Organization</Accordion.Title>
        <Accordion.Content>
          <p>
            Next Level is a grade-based organization, players play in their
            designated grade level. We do not allow participants to 'play down'
            by any grade level.
          </p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title>Grade Based Organization</Accordion.Title>
        <Accordion.Content>
          <p>
            Next Level is a grade-based organization, players play in their
            designated grade level. We do not allow participants to 'play down'
            by any grade level.
          </p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title>Grade Based Organization</Accordion.Title>
        <Accordion.Content>
          <p>
            Next Level is a grade-based organization, players play in their
            designated grade level. We do not allow participants to 'play down'
            by any grade level.
          </p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};
