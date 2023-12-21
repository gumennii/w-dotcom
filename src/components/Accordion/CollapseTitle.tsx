import React from "react";
import { twMerge } from "tailwind-merge";
import cn from "~/utils/style";

export type CollapseTitleProps<T extends HTMLElement = HTMLDivElement> =
  React.HTMLAttributes<T>;

const classesFn = ({ className }: Pick<CollapseTitleProps, "className">) =>
  twMerge("collapse-title", className);

const CollapseTitle = ({
  children,
  className,
  ...props
}: CollapseTitleProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(
        "collapse-title",
        "text-2xl font-medium after:text-neutral-300",
        className,
      )}
    >
      {children}
    </div>
  );
};

// export type SummaryProps = CollapseTitleProps<HTMLElement>;
// export const Summary = React.forwardRef<HTMLElement, SummaryProps>(
//   ({ children, className }, ref): JSX.Element => {
//     return (
//       <summary ref={ref} className={classesFn({ className })}>
//         {children}
//       </summary>
//     );
//   },
// );

export default CollapseTitle;
