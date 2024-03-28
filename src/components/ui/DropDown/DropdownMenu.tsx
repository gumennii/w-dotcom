import React from "react";
import cn from "@/utils/cn";

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement>;

const DropdownMenu = ({ className, ...props }: DropdownMenuProps) => {
  return (
    <ul
      {...props}
      tabIndex={0}
      className={cn("dropdown-content menu rounded-box bg-base-100 p-2 shadow", className)}
      role="menu"
    />
  );
};

export default DropdownMenu;
