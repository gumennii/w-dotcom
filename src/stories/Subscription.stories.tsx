import type { StoryFn as Story, Meta } from "@storybook/react";

import { MaxWidth } from "@/utils/styling";
import { Subscribe, type SubscribeProps } from "@/components/modules";
import { Container, Modal } from "@/components/ui";

export default {
  title: "Modules/Subscribe Forms",
  component: Subscribe,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<SubscribeProps> = args => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <Subscribe {...args} />
    </Container>
  );
};

Default.args = {
  title: "Want news and updates?",
  descriprion: "Sign up for our newsletter to stay up to date.",
  className: "rounded-md bg-primary",
};

export const Wide: Story<SubscribeProps> = args => {
  return (
    <div className="bg-[#0F2344]">
      <Container maxWidth={MaxWidth.Large}>
        <Subscribe {...args} />
      </Container>
    </div>
  );
};

Wide.args = {
  title: "Stay Tuned For Updates",
  descriprion:
    "Stay informed about our Flag Football program at Alhambra High School! Subscribe to our offseason newsletter for exclusive updates, thrilling highlights, and insider insights.",
  variant: "wide",
};

export const ModalForm: Story<SubscribeProps> = args => {
  return (
    <Modal trigger="Open Modal" maxWidth="small">
      <Subscribe {...args} />
    </Modal>
  );
};

ModalForm.args = {
  title: "Stay In The Game",
  descriprion: "Sign up for our offseason newsletter to stay up to date.",
  variant: "modal",
};
