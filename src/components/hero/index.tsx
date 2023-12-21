import {
  type ComponentProps,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";
import { type Parameters, type Slots } from "./props";

export const HeroComponent = ({
  component,
  context,
}: ComponentProps<Parameters, Slots>) => {
  return (
    <>
      <UniformText
        component={component}
        context={context}
        parameterId="titleA"
        as="h1"
        className="title"
        placeholder="Enter hero title"
      />
      <UniformText
        component={component}
        context={context}
        parameterId="titleB"
        as="h2"
        className="title"
        placeholder="Enter hero title"
      />
      <UniformText
        component={component}
        context={context}
        parameterId="highlightedText"
        className="description"
        placeholder="Enter hero description"
      />
      <UniformText
        component={component}
        context={context}
        parameterId="subtext"
        className="description"
        placeholder="Enter hero description"
      />
      <UniformText
        component={component}
        context={context}
        parameterId="button"
        className="description"
        placeholder="Enter hero description"
      />
    </>
  );
};
