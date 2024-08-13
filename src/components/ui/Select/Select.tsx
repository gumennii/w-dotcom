import React, { type ReactElement } from "react";
import cn from "@/utils/cn";

import SelectOption, { type SelectOptionProps } from "./SelectOption";

type ListOrItem<T> = T[] | T | Array<T | T[]>;

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: ListOrItem<ReactElement<SelectOptionProps>>;
  error?: string;
};

const SelectInner = (props: SelectProps, ref: React.ForwardedRef<HTMLSelectElement>): JSX.Element => {
  const { children, error, className, ...rest } = props;

  return (
    <select
      {...rest}
      ref={ref}
      className={cn(
        "select-focus-btn select select-bordered select-lg h-[53px] min-h-[53px] bg-white pl-[1rem] font-inter text-xs font-normal leading-normal text-[#61636B] shadow focus:outline-offset-0 lg:h-[75px] lg:min-h-[75px] lg:pl-6 lg:text-lg",
        className,
        { "border border-solid border-error text-error": error }
      )}
    >
      {children}
    </select>
  );
};

const Select = React.forwardRef(SelectInner);

Select.displayName = "Select";

export default Object.assign(Select, { Option: SelectOption });
