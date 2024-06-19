import React, { PropsWithChildren } from "react";
import cn from "@/utils/cn";
import { getTableSize, getTableAlign } from "./helpers";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableData from "./TableData";
import TableCell from "./TableCell";

export type TableProps = {
  size?: "small" | "large" | "tiny" | "normal" | "full";
  textAlign: "center" | "left" | "right";
  data?: any;
  variant?: TableVariant;
  equalColumns?: boolean;
  hideColumns?: string[];
} & PropsWithChildren;

enum TableVariant {
  Zebra = "zebra",
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      children,
      size = "full",
      textAlign,
      data,
      variant = TableVariant.Zebra,
      equalColumns = true,
      hideColumns,
      ...props
    },
    ref
  ): JSX.Element => (
    <div className={cn(size === "full" ? "overflow-x-auto rounded-lg border-2 border-solid" : "overflow-x-auto")}>
      <table
        {...props}
        ref={ref}
        className={cn("table text-primary", getTableSize(size), getTableAlign(textAlign), {
          "table-zebra": variant === TableVariant.Zebra,
        })}
      >
        {data ? (
          <TableData data={data} size={size} hideColumns={hideColumns} equalColumns={equalColumns} />
        ) : (
          <>{children}</>
        )}
      </table>
    </div>
  )
);

Table.displayName = "Table";

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
