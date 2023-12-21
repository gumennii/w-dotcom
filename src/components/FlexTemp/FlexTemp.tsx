import {
  type ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";
import classNames from "classnames";
import React from "react";

export type Slots = string;

export interface FlexTempProps {
  alignItems?: "start" | "center" | "end";
  justifyContent?: "center" | "start" | "end" | "between" | "around";
  children?: JSX.Element;
}

export const FlexTemp = ({
  component,
  context,
  slots,
}: ComponentProps<FlexTempProps, Slots>) => {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "items-center",
        "justify-center",
        "space-x-4",
        "p-10",
      )}
    >
      <UniformSlot context={context} data={component} slot={slots.slots} />
    </div>
  );
};
