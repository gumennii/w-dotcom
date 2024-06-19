import { Divider } from "@/components/ui/Divider/Divider";
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
    <div className={classNames("order-1 w-full md:w-[47%]", className)}>
      <h5 className="text-lg font-semibold md:text-xl lg:text-2xl">{title}</h5>
      <Divider />
      <div className="text-sm font-normal lg:text-base">{children}</div>
    </div>
  );
};
