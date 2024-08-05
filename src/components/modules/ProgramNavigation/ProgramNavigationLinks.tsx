"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import cn from "@/utils/cn";
import { Dropdown } from "@/components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useAmplitudeContext from "@/hooks/amplitude";

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

    const { trackAmplitudeEvent } = useAmplitudeContext();

    const clickHandler = (name: string) => {
      trackAmplitudeEvent("click", {
        button: name,
        location: "[Navigation] - Program Navigation",
      });
    };

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
                  ? "pointer-events-none bg-[#0e2344] font-semibold text-white"
                  : "bg-inherit font-normal text-primary hover:bg-secondary hover:text-white"
              }`,
              "mr-1 hidden h-11 items-center justify-center rounded-md px-4 font-inter text-base leading-relaxed md:inline-flex"
            )}
            onClick={() => clickHandler(link.name)}
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

  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHandler = (name: string) => {
    trackAmplitudeEvent("click", {
      button: name,
      location: "[Navigation] - Program Navigation (mobile)",
    });
  };

  // Create a ref array to store refs for each mapped link item
  const linksRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  const handleClickLink = (index: number) => {
    const clickedLink = linksRefs.current[index];
    if (clickedLink) {
      clickedLink.blur();
    }
  };

  return (
    <div className="md:hidden">
      <Dropdown>
        <Dropdown.Toggle
          button={false}
          className="block cursor-pointer rounded-md bg-base-200 px-4 py-2 font-inter text-sm font-semibold hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200"
        >
          <div className="flex items-center gap-2">
            <span>Program menu</span>
            <FontAwesomeIcon icon={faAngleDown as IconProp} />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="z-50 mt-4 w-52">
          {links.map((link, index) => (
            <Dropdown.Item anchor={false} key={link.id}>
              <Link
                ref={el => {
                  linksRefs.current[index] = el;
                }}
                href={link.id}
                className={
                  link.id === hash || (index === 0 && hash === "") ? "pointer-events-none bg-[#0e2344] text-white" : ""
                }
                onClick={() => {
                  handleClickLink(index);
                  clickHandler(link.name);
                }}
              >
                {link.name}
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

ProgramNavigationLinks.displayName = "ProgramNavigationLinks";

export default ProgramNavigationLinks;
