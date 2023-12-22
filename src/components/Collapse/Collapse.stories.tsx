import React from 'react'
import type { StoryFn as Story, Meta } from '@storybook/react'

import Collapse, { type CollapseProps } from '.'

export default {
  title: 'Data Display/Collapse',
  component: Collapse,
} as Meta

export const Default: Story<CollapseProps> = (args) => {
  return (
    <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Click to open/close
      </Collapse.Title>
      <Collapse.Content>
        <p>content</p>
      </Collapse.Content>
    </Collapse>
  )
}
Default.args = {
  className: 'bg-gray-100',
}
