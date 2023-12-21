/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  type ResolveComponentFunction,
  type ComponentProps,
  DefaultNotImplementedComponent,
} from "@uniformdev/canvas-next-rsc/component";

export const resolveComponent: ResolveComponentFunction = ({ component }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentType: React.ComponentType<ComponentProps<any>> | null =
    DefaultNotImplementedComponent;

  // todo: add logic to resolve components here
  return {
    component: componentType,
  };
};
