import React, { useState } from "react";
import cn from "~/utils/style";
import Link from "next/link";
import Select from "../Select";

type TProgramNavigationLink = {
  href: string;
  name: string;
};

export type ProgramNavigationLinkProps = React.HTMLAttributes<HTMLDivElement> & {
  links: TProgramNavigationLink[];
};

const ProgramNavigationLink = React.forwardRef<HTMLDivElement, ProgramNavigationLinkProps>(
  ({ className, links, ...props }, ref): JSX.Element => {
    return (
      <div
        {...props}
        className={cn(
          "flex items-center justify-start",
          className,
        )}
        ref={ref}
      >
        <ProgramSelect links={links} />
        {links.map((link, index) => (
          <Link
            key={`${link.href}_${index}`}
            href={link.href}
            className={cn(
              `${index === 1 ? "bg-focus-btn text-white font-medium hover:bg-primary" : "bg-inherit font-normal text-primary hover:text-focus-text"}`,
              "text-lg items-center justify-center h-11 px-4 rounded-lg mr-1 hidden md:inline-flex"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  },
);

type ProgramSelectProps = {
  links: TProgramNavigationLink[];
};

const ProgramSelect = ({ links }: ProgramSelectProps) => {
  const [value, setValue] = useState('default')
  return (
    <div className="md:hidden">
      <Select
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <Select.Option value={'default'} disabled>
          Pages
        </Select.Option>
        {links.map((item) => (
          <Select.Option value={item.name}>{item.name}</Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default ProgramNavigationLink;
