import React, { ReactNode } from "react";
import cn from "@/utils/cn";

export type TableHeadProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    return (
      <thead {...props} className={cn(className, "border-b-2 border-solid bg-base-200")} ref={ref}>
        <tr>{children}</tr>
      </thead>
    );
  }
);

TableHead.displayName = "TableHead";

export default TableHead;
