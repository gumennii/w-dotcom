import React, { FC } from "react";
import cn from "@/utils/cn";

interface Props {
  data: {
    [index: string]: {
      [index: string]: string;
    };
  };
  size: "small" | "large" | "tiny" | "normal" | "full";
  hideColumns?: string[];
  equalColumns: boolean;
}

const TableData: FC<Props> = ({ data, size, hideColumns = [], equalColumns }) => {
  const id = React.useId();
  const rows = Object.keys(data);
  const head = Object.keys(data[rows[1]]);

  if (typeof hideColumns !== "object" || hideColumns === null) {
    hideColumns = [];
  }

  return (
    <>
      <thead className={cn(size === "full" ? "border-b-2 border-solid" : "")}>
        <tr className={cn(equalColumns ? "grid grid-flow-col auto-cols-[minmax(auto,_1fr)]" : "")}>
          {head.map((headCell, i) => {
            if (hideColumns.indexOf(headCell) === -1) {
              return (
                <th
                  className="bg-base-200 text-primary text-base uppercase font-semibold leading-normal lg:text-lg"
                  key={`head-${i}-${id}`}
                >
                  {headCell}
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={`row-${i}-${id}`}
            className={cn(equalColumns ? "grid grid-flow-col auto-cols-[minmax(auto,_1fr)]" : "")}
          >
            {Object.keys(data[row]).map((cell, j) => {
              if (hideColumns.indexOf(cell) === -1) {
                return (
                  <td key={`cell-${j}-${id}`} className="text-sm leading-normal">
                    {data[row][cell]}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </>
  );
};

TableData.displayName = "TableData";

export default TableData;
