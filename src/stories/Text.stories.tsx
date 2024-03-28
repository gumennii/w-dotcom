import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@/components/ui";
import { Container } from "@/components/ui";
import { MaxWidth } from "@/utils/styling";

const meta: Meta<typeof Text> = {
  title: "Data Display/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

const BASE_PROPS: Omit<TextProps, "component"> = {
  type: "h1",
  children: "Example text",
};

const renderStory = (args: TextProps) => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <Text {...args} />
    </Container>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  render: renderStory,
};

export const TextSize: Story = {
  args: BASE_PROPS,
  render: (args: TextProps) => {
    return (
      <Container maxWidth={MaxWidth.Small} className="space-x-6">
        <Text {...args} type="h1" />
        <Text {...args} type="h2" />
        <Text {...args} type="h3" />
        <Text {...args} type="h4" />
        <Text {...args} type="h5" />
        <Text {...args} type="p" />
        <Text {...args} type="q" />
      </Container>
    );
  },
};
