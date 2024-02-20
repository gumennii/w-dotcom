import type { StoryFn as Story, Meta } from "@storybook/react";

import { SingUp, type SingUpProps } from "@/modules";
import { Container } from "@/components";
import { MaxWidth } from "@/utils/styling";

export default {
  title: "Modules/Forms/SingUp",
  component: SingUp,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<SingUpProps> = args => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <SingUp {...args} />
    </Container>
  );
};

Default.args = {
  title: "Want news and updates?",
  descriprion: "Sign up for our newsletter to stay up to date.",
  className: "rounded-md bg-primary",
};
