import type { Meta, StoryObj } from "@storybook/react";
import { Video, VideoProps } from "@/components";
import { Container } from "@/components";
import { MaxWidth } from "@/utils/styling";

const meta: Meta<typeof Video> = {
  title: "Data Display/Video",
  component: Video,
};

export default meta;
type Story = StoryObj<typeof Video>;

const BASE_PROPS: Omit<VideoProps, "component"> = {
  url: "https://vimeo.com/311600717",
  controls: true,
  muted: true,
  lazyLoad: true,
  loop: true,
};

const renderStory = (args: VideoProps) => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <Video {...args} />
    </Container>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  render: renderStory,
};
