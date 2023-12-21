import React, { useState } from 'react';
import type { StoryFn as Story, Meta } from '@storybook/react';

import Select, { type SelectProps } from '.';

const { Option } = Select;

export default {
  title: 'Data Input/Select',
  component: Select,
  parameters: {
    controls: { exclude: ['ref'] },
    layout: "centered",
  },
  args: {
    className: 'w-full max-w-xs',
    disabled: false,
  },
} as Meta;

export const Default: Story<SelectProps> = (args) => {
  const [value, setValue] = useState('default')

  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Select
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <Option value={'default'} disabled>
          Pages
        </Option>
        <Option value={'item1'}>Item 1</Option>
        <Option value={'item2'}>Item 2</Option>
        <Option value={'item3'}>Item 3</Option>
      </Select>
    </div>
  );
};
