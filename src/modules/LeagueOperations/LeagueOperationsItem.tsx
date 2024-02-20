import { Divider } from "@/components/Divider";
import classNames from "classnames";

export const LeagueOperationsItem = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("w-full order-1 md:w-[47%]", className)}>
      <h5 className="font-semibold text-lg md:text-xl lg:text-2xl">{title}</h5>
      <Divider />
      <div className="font-normal text-sm lg:text-base">{children}</div>
    </div>
  );
};
