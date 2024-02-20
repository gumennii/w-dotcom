import type { Meta, StoryObj } from "@storybook/react";

import Profile from "@/modules/Profile";

const meta = {
  title: "Modules/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Site Director",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in rutrum risus, quis aliquet purus. Praesent sagittis rhoncus neque, malesuada sodales ex dignissim cursus. Nulla gravida, lectus vel egestas efficitur, metus enim facilisis sapien, vitae venenatis purus dolor vel felis. Aenean lobortis et nisl eu auctor. Vivamus placerat auctor sem. Curabitur vehicula posuere turpis, sit amet pulvinar lorem varius et. Phasellus interdum mi nisi, id ornare nibh tempor vitae. Sed neque nulla, laoreet quis massa at, maximus finibus metus.",
    name: "Profile Name",
    imagePath: "/avatar.jpg",
  },
};
