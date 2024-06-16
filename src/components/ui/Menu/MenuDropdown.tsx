"use client";

import React, { ReactNode, useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import cn from "@/utils/cn";

export type MenuDropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  open?: boolean;
};

export const MenuDropdown = React.forwardRef<HTMLDivElement, MenuDropdownProps>(
  ({ className, label, children, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
      setOpen(val => !val);
    }, [setOpen]);

    const classes = cn("flex items-center justify-between", className);

    return (
      <>
        <div {...props} className={classes} onClick={toggleOpen} ref={ref}>
          {label}
          <FontAwesomeIcon icon={open ? (faChevronDown as IconProp) : (faChevronRight as IconProp)} size="xs" />
        </div>
        <ul className={cn("menu-dropdown after:none", { "menu-dropdown-show": open })}>{children}</ul>
      </>
    );
  }
);

MenuDropdown.displayName = "MenuDropdown";
