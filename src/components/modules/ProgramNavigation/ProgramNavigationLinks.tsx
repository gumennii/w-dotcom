"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import cn from "@/utils/cn";
import { Dropdown } from "@/components/ui";

type TProgramNavigationLink = {
  href: string;
  name: string;
  id: string;
};

export type ProgramNavigationLinksProps = React.HTMLAttributes<HTMLDivElement> & {
  links: TProgramNavigationLink[];
};

const ProgramNavigationLinks = React.forwardRef<HTMLDivElement, ProgramNavigationLinksProps>(
  ({ className, links, ...props }, ref): JSX.Element => {
    const params = useParams();
    const [hash, setHash] = useState("");

    useEffect(() => {
      setHash(window.location.hash);
    }, [params]);

    return (
      <div {...props} className={cn("flex items-center justify-start", className)} ref={ref}>
        <ProgramDropdown links={links} />
        {links.map((link, index) => (
          <Link
            key={`${link.href}_${index}`}
            href={link.href}
            className={cn(
              `${
                link.id === hash || (index === 0 && hash === "")
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
  const params = useParams();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  return (
    <div className="md:hidden">
      <Dropdown>
        <Dropdown.Toggle>Program menu</Dropdown.Toggle>
        <Dropdown.Menu className="mt-4 w-52 z-50">
          {links.map((link, index) => (
            <Dropdown.Item
              anchor
              href={link.href}
              key={link.id}
              className={
                link.id === hash || (index === 0 && hash === "") ? "bg-[#0e2344] text-white pointer-events-none" : ""
              }
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
