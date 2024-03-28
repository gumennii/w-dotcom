import React from "react";
import cn from "@/utils/cn";

export type TableCellProps = React.TableHTMLAttributes<HTMLTableCellElement> & {
  isHead?: boolean;
};

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, isHead, className, ...props }, ref): JSX.Element => (
    <>
      {isHead ? (
        <th
          {...props}
          className={cn(className, "text-primary text-base uppercase font-semibold leading-normal lg:text-lg")}
          ref={ref}
        >
          {children}
        </th>
      ) : (
        <td {...props} className={className} ref={ref}>
          {children}
        </td>
      )}
    </>
  )
);

TableCell.displayName = "TableCell";

export default TableCell;
