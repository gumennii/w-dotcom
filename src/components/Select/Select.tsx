import React, { type ReactElement } from "react";
import cn from "@/utils/cn";

import SelectOption, { type SelectOptionProps } from "./SelectOption";

type ListOrItem<T> = T[] | T | Array<T | T[]>;

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: ListOrItem<ReactElement<SelectOptionProps>>;
};

const SelectInner = (props: SelectProps, ref: React.ForwardedRef<HTMLSelectElement>): JSX.Element => {
  const { children, className, ...rest } = props;

  return (
    <select
      {...rest}
      ref={ref}
      className={cn(
        "select-focus-btn select select-bordered select-lg bg-white text-base font-medium focus:outline-offset-0 text-primary shadow",
        className
      )}
    >
      {children}
    </select>
  );
};

const Select = React.forwardRef(SelectInner);

Select.displayName = "Select";

export default Object.assign(Select, { Option: SelectOption });
