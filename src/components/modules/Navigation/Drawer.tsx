import React, { ReactNode } from "react";
import cn from "@/utils/cn";
import "@/styles/nestedDropdown.css";

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  side: ReactNode;
  open?: boolean;
  end?: boolean;
  toggleClassName?: string;
  contentClassName?: string;
  sideClassName?: string;
  overlayClassName?: string;
  onClickOverlay?: () => void;
};

const Drawer = ({
  children,
  side,
  open,
  end,
  className,
  toggleClassName,
  contentClassName,
  sideClassName,
  overlayClassName,
  onClickOverlay,
  ...props
}: DrawerProps) => {
  const classes = cn("drawer", className, {
    "drawer-end": end,
  });

  return (
    <div aria-expanded={open} {...props} className={classes}>
      <input type="checkbox" className={cn("drawer-toggle", toggleClassName)} checked={open} readOnly />
      <div className={cn("drawer-content", contentClassName)}>{children}</div>
      <div className={cn("mobile-menu-button drawer-side overflow-x-hidden", sideClassName)}>
        <label className={cn("drawer-overlay", overlayClassName)} onClick={onClickOverlay}></label>
        {side}
      </div>
    </div>
  );
};

Drawer.displayName = "Drawer";

export default Drawer;
