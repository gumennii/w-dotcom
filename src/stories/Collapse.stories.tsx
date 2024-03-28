import type { StoryFn as Story, Meta } from "@storybook/react";

import Collapse, { type CollapseProps } from "@/components/ui/Collapse";
import { Container } from "@/components/ui";
import { MaxWidth } from "@/utils/styling";

export default {
  title: "Actions/Collapse",
  component: Collapse,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<CollapseProps> = args => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <Collapse {...args}>
        <Collapse.Title>Click me</Collapse.Title>
        <Collapse.Content>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </Collapse.Content>
      </Collapse>
    </Container>
  );
};
Default.args = {
  open: false,
};
