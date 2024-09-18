"use client";

import { FC, useCallback, ReactNode, useEffect, useRef } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type AccordionProgramItemProps = {
  title?: string;
  children: ReactNode;
  id: string;
  className?: string;
  isOpen?: boolean;
  onClick?: (id: string) => void;
};

export const AccordionProgramItem: FC<AccordionProgramItemProps> = ({
  title,
  children,
  id,
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
    <div
      className={classNames(
        "card mt-4 rounded-none border-b border-solid border-neutral-300 pb-4 last:mb-0 lg:mt-8",
        className
      )}
      id={id}
    >
      {title && (
        <button
          onClick={toggleAccordion}
          className="flex w-full flex-row items-center justify-between bg-inherit pr-1 text-lg font-semibold"
        >
          <h2 className="font-roboto text-lg font-semibold lg:text-2xl">{title}</h2>
          <div className="flex items-center">
            {isOpen ? (
              <FontAwesomeIcon icon={faAngleUp as IconProp} color="#d4d4d4" />
            ) : (
              <FontAwesomeIcon icon={faAngleDown as IconProp} color="#d4d4d4" className="mt-1" />
            )}
          </div>
        </button>
      )}
      <div
        ref={contentRef}
        className={classNames("overflow-hidden transition-[max-height] duration-500 ease-in-out", {
          "max-h-0": !isOpen,
          "max-h-auto": isOpen,
        })}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0" }}
      >
        <div className="text-base text-primary">{children}</div>
      </div>
    </div>
  );
};
