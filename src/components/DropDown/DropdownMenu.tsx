import React from "react";
import cn from "~/utils/style";

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement>;

const DropdownMenu = ({ className, ...props }: DropdownMenuProps) => {
  return (
    <ul
      {...props}
      tabIndex={0}
      className={cn(
        "menu dropdown-content rounded-box bg-base-100 p-2 shadow",
        className,
      )}
      role="menu"
    />
  );
};

export default DropdownMenu;
