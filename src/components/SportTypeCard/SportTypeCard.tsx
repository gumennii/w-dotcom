import Link from "next/link";
import React, { ReactNode } from "react";
import cn from "~/utils/style";

export interface SportTypeCardProps {
  variant?: "vertical" | "horizontal";
  path: string;
  children: ReactNode;
  className: string;
}

const variantMap = {
  vertical:
    "px-8 py-8 rounded-2xl shadow flex flex-col justify-center items-center gap-2",
  horizontal: "p-4 rounded-2xl shadow flex justify-center items-center gap-4",
};

export const SportTypeCard = ({
  className,
  variant = "vertical",
  path,
  children,
  ...props
}: SportTypeCardProps): JSX.Element => {
  return (
    <Link
      aria-label="Sport type card"
      {...props}
      href={path}
      className={cn(variantMap[variant], className)}
    >
      {children}
    </Link>
  );
};
