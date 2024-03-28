import type { StoryFn as Story, Meta } from "@storybook/react";

import { Modal, type ModalProps } from "@/components/ui";

export default {
  title: "Actions/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<ModalProps> = args => {
  return <Modal {...args} />;
};

Default.args = {
  maxWidth: "small",
  children: "Simple Modal",
  trigger: "Open Modal",
};
