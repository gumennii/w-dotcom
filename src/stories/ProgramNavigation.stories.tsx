import type { StoryFn as Story, Meta } from "@storybook/react";

import { getProgramNavigationLinks } from "@/utils/navigation";
import { ProgramNavigation, type ProgramNavigationProps } from "@/components/modules";

export default {
  title: "Modules/Program Navigation",
  component: ProgramNavigation,
} as Meta;

export const Default: Story<ProgramNavigationProps> = args => {
  return (
    <div className="bg-gray-100">
      <ProgramNavigation>
        <ProgramNavigation.Body>
          <ProgramNavigation.Links links={getProgramNavigationLinks("slug")} />
          <ProgramNavigation.Actions />
        </ProgramNavigation.Body>
      </ProgramNavigation>
    </div>
  );
};
