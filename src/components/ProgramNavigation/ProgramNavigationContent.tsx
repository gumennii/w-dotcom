import React from "react";
import cn from "~/utils/style";

export type ProgramNavigationBodyProps = React.HTMLAttributes<HTMLDivElement>;

const ProgramNavigationBody = React.forwardRef<HTMLDivElement, ProgramNavigationBodyProps>(
  ({ className, ...props }, ref): JSX.Element => {
    return (
      <div
        {...props}
        className={cn(
          "max-w-4xl m-auto flex items-center justify-between px-4 lg:px-0",
          className,
        )}
        ref={ref}
      />
    );
  },
);

export default ProgramNavigationBody;
