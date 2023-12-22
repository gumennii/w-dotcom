import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import { Accordion } from '../../canvas/Accordion/Accordion';
import { createFakeCompositionData, createUniformParameter } from '../utils';

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const ACCORDION_ITEMS = [
  {
    title: 'Is this template completely free to use?',
    description: 'Yes, this template is completely free to use.',
  },
  {
    title: 'Can I use it in a commercial project?',
    description: 'Yes, this you can.',
  },
  {
    title: 'What is your refund policy?',
    description:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    title: 'Do you offer technical support?',
    description:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];

export const Default: Story = {
  args: {
    title: 'Frequently Asked Questions',
    description:
      'Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.',
  },
  render: args => {
    const fakeComposition = createFakeCompositionData(
      'accordion',
      {
        title: args.title,
        description: args.description,
      },
      {
        items: ACCORDION_ITEMS.map(item => ({
          type: 'accordionItem',
          parameters: createUniformParameter(item),
        })),
      }
    );
    return (
      <UniformComposition data={fakeComposition}>
        <div className='max-w-sm sm:max-w-lg lg:max-w-4xl'>
          <Accordion {...args} />
        </div>
      </UniformComposition>
    );
  },
};
