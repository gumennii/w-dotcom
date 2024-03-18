import React, { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBaseball,
  faFootball,
  faVolleyball,
  faFutbol,
  faFlag,
  faBasketball,
} from "@fortawesome/free-solid-svg-icons";
import cn from "@/utils/cn";
import { Text } from "@/components";

export interface SportTypeCardProps {
  path: string;
  title: string;
  icon: "footbal" | "basketball" | "volleyball" | "futboll" | "flag-pennant" | "baseball";
  className?: string;
}

const iconMap = {
  footbal: faFootball,
  baseball: faBaseball,
  volleyball: faVolleyball,
  futboll: faFutbol,
  "flag-pennant": faFlag,
  basketball: faBasketball,
};

const SportTypeCard: FC<SportTypeCardProps> = ({ path, icon, className, title, ...props }) => {
  return (
    <Link
      aria-label="Sport type card"
      {...props}
      href={path}
      className={cn(
        "flex md:flex-row lg:flex-col items-center justify-center gap-4 rounded-2xl bg-secondary p-4 text-white shadow",
        className
      )}
    >
      <FontAwesomeIcon icon={iconMap[icon] as IconProp} className="h-10 w-10 p-1" />
      <Text type="h2" className="text-center font-bold uppercase">
        {title}
      </Text>
    </Link>
  );
};

export default SportTypeCard;
