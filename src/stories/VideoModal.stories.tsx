import type { StoryFn as Story, Meta } from "@storybook/react";

import { VideoModal, type VideoModalProps } from "@/components/ui";

export default {
  title: "Actions/VideoModal",
  component: VideoModal,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<VideoModalProps> = args => {
  return <VideoModal {...args} />;
};

Default.args = {
  maxWidth: "2xLarge",
  children: "Watch Teaser",
  url: "https://player.vimeo.com/video/906084642?title=0&byline=0&portrait=0&playsinline=0&autopause=0&controls=0&app_id=122963",
};
