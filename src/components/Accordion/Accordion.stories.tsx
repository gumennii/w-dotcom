import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";

import Accordion, { AccordionProps } from ".";
// import Join from "../Join";

export default {
  title: "Data Display/Accordion",
  component: Accordion,
} as Meta;

export const Default: Story<AccordionProps> = (args) => {
  return (
    <div className="flex flex-wrap gap-2">
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
Default.args = {
  className: "bg-base-100",
};

export const WithArrow: Story<AccordionProps> = (args) => {
  return (
    <div className="flex flex-wrap gap-2">
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
WithArrow.args = {
  // className: "bg-base-200",
};

export const WithPlusMinus: Story<AccordionProps> = (args) => {
  return (
    <div className="flex flex-wrap gap-2">
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

WithPlusMinus.args = {
  // className: "bg-base-200",
};
