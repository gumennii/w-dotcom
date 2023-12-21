import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "~/utils/style";

export interface SportTypeCardProps {
  path: string;
  icon: IconDefinition;
  className: string;
}

export const SportTypeCard = ({
  path,
  icon,
  className,
  children,
  ...props
}: PropsWithChildren<SportTypeCardProps>): JSX.Element => {
  return (
    <Link
      aria-label="Sport type card"
      {...props}
      href={path}
      className={cn(
        "flex items-center justify-center gap-4 rounded-2xl p-4 shadow lg:flex-col lg:gap-2 lg:p-8",
        className,
      )}
    >
      <FontAwesomeIcon icon={icon} className="h-10 w-10 p-1" />
      {children}
    </Link>
  );
};
