import React from 'react';
import type { StoryFn as Story, Meta } from '@storybook/react';

import ProgramNavigation, { type ProgramNavigationProps } from '.';

export default {
  title: 'Navigation/ProgramNavigation',
  component: ProgramNavigation,
  parameters: {
    layout: "fullscreen",
    
  },
} as Meta;

const testLinks = [
  {
    name: "Program Overview",
    href: "#",
  },
  {
    name: "League Operations",
    href: "#",
  },
  {
    name: "Schedule",
    href: "#",
  },
];

export const Default: Story<ProgramNavigationProps> = (arg) => {
  return (
    <ProgramNavigation {...arg}>
      <ProgramNavigation.Body>
        <ProgramNavigation.Link links={testLinks} />
        <ProgramNavigation.Actions>REGISTER NOW</ProgramNavigation.Actions>
      </ProgramNavigation.Body>
    </ProgramNavigation>
  );
};
