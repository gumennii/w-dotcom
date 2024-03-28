import React from "react";
import { Button } from "@/components/ui/Button/Button";

export type ProgramNavigationActionProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "solid" | "outlined" | "default" | "accent";
  size?: "regular" | "large" | "small";
  children?: string;
  onClick?: () => void;
  action?: {
    name: string;
    href: string;
  };
};

const ProgramNavigationAction = React.forwardRef<HTMLDivElement, ProgramNavigationActionProps>(
  (
    { className, size = "regular", action = { name: "Register now", href: "#registration" }, ...props },
    ref
  ): JSX.Element => {
    return (
      <div {...props} className={className} ref={ref}>
        <Button size={size} rounded style="secondary" copy={action.name} href={action.href} />
      </div>
    );
  }
);

ProgramNavigationAction.displayName = "ProgramNavigationAction";

export default ProgramNavigationAction;
