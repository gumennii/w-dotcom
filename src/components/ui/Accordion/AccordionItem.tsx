"use client";

import { FC, useCallback, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import cn from "@/utils/cn";

type AccordionItemProps = {
  title: string;
  description: string;
  id: string;
  className?: string;
  isOpen?: boolean;
  onClick?: (id: string) => void;
  theme?: "light" | "dark";
};

export const AccordionItem: FC<AccordionItemProps> = ({
  title,
  description,
  id,
  theme = "light",
  className,
  isOpen = false,
  onClick = () => null,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [onClick, id]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0";
    }
  }, [isOpen]);

  return (
    <div className={cn("card mt-8 rounded-none border-b border-solid border-[#CACCD4] pb-1", className)} id={id}>
      <button
        onClick={toggleAccordion}
        className="flex w-full flex-row items-center justify-between bg-inherit py-2 pr-1 text-lg font-semibold md:py-4"
      >
        <p
          className={cn("w-[90%] text-start text-primary", {
            "font-roboto text-base font-semibold leading-relaxed text-white lg:text-xl lg:leading-normal":
              theme === "dark",
          })}
        >
          {title}
        </p>
        <div className="flex items-center">
          {isOpen ? (
            <FontAwesomeIcon icon={faAngleUp as IconProp} color="#CACCD4" />
          ) : (
            <FontAwesomeIcon icon={faAngleDown as IconProp} color="#CACCD4" className="mt-1" />
          )}
        </div>
      </button>
      <div
        ref={contentRef}
        className={cn("overflow-hidden transition-[max-height] duration-500 ease-in-out", {
          "max-h-0": !isOpen,
          "max-h-auto": isOpen,
        })}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0" }}
      >
        <p
          className={cn("pb-2 text-base text-primary lg:pb-4", {
            "font-inter text-xs leading-relaxed text-white lg:text-base lg:leading-normal": theme === "dark",
          })}
        >
          {description}
        </p>
      </div>
      {/* {isOpen && (
        <p
          className={cn("pb-2 text-base text-primary lg:pb-4", {
            "font-inter text-xs leading-relaxed text-white lg:text-base lg:leading-normal": theme === "dark",
          })}
        >
          {description}
        </p>
      )} */}
    </div>
  );
};
