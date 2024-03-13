"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "@/utils/cn";
import Dropdown from "@/components/DropDown";

type TProgramNavigationLink = {
  href: string;
  name: string;
};

export type ProgramNavigationLinksProps = React.HTMLAttributes<HTMLDivElement> & {
  links: TProgramNavigationLink[];
};

const ProgramNavigationLinks = React.forwardRef<HTMLDivElement, ProgramNavigationLinksProps>(
  ({ className, links, ...props }, ref): JSX.Element => {
    const pathname = usePathname();

    return (
      <div {...props} className={cn("flex items-center justify-start", className)} ref={ref}>
        <ProgramDropdown links={links} />
        {links.map((link, index) => (
          <Link
            key={`${link.href}_${index}`}
            href={link.href}
            className={cn(
              `${
                link.href === pathname
                  ? "bg-[#0e2344] font-medium text-white pointer-events-none"
                  : "bg-inherit font-normal text-primary hover:bg-secondary hover:text-white"
              }`,
              "mr-1 hidden h-11 items-center justify-center rounded-lg px-4 text-base md:inline-flex"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  }
);

type ProgramDropdownProps = {
  links: TProgramNavigationLink[];
};

const ProgramDropdown = ({ links }: ProgramDropdownProps) => {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Dropdown>
        <Dropdown.Toggle>Program menu</Dropdown.Toggle>
        <Dropdown.Menu className="mt-4 w-52 z-50">
          {links.map(link => (
            <Dropdown.Item
              anchor
              href={link.href}
              key={link.href}
              className={link.href === pathname ? "bg-[#0e2344] text-white pointer-events-none" : ""}
            >
              {link.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

ProgramNavigationLinks.displayName = "ProgramNavigationLinks";

export default ProgramNavigationLinks;
