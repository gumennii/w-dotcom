import {
  DefaultNotImplementedComponent,
  type ResolveComponentFunction,
  type ResolveComponentResult,
} from "@uniformdev/canvas-next-rsc/component";
import * as mappings from "./mappings";
import { type ResolveComponentResultWithType } from "./models";

export const resolveComponent: ResolveComponentFunction = ({ component }) => {
  let result: ResolveComponentResult = {
    component: DefaultNotImplementedComponent,
  };

  const keys = Object.keys(mappings);

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]!;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    const mapping = (mappings as any)[key] as
      | ResolveComponentResultWithType
      | undefined;

    if (mapping?.type === component.type) {
      result = mapping;
      break;
    }
  }

  return result;
};
