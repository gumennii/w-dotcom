import {
  type ResolveComponentFunction,
  type ComponentProps,
  DefaultNotImplementedComponent,
} from "@uniformdev/canvas-next-rsc/component";

export const resolveComponent: ResolveComponentFunction = ({ component }) => {
  let componentType: React.ComponentType<ComponentProps<any>> | null =
    DefaultNotImplementedComponent;

  // todo: add logic to resolve components here
  return {
    component: componentType,
  };
};
