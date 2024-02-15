import React from "react";

export type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

const SelectOption = ({ children, ...props }: SelectOptionProps): JSX.Element => {
  return <option {...props}>{children}</option>;
};

SelectOption.displayName = "SelectOption";

export default SelectOption;
