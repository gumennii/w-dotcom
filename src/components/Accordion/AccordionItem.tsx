"use client";

import { FC, useCallback, useState } from "react";
import classNames from "classnames";

type AccordionItemProps = {
  title: string;
  description: string;
  className?: string;
};

export const AccordionItem: FC<AccordionItemProps> = ({ title, description, className }) => {
  const [isOpened, setOpened] = useState(false);
  const toggleAccordion = useCallback(() => setOpened(isOpened => !isOpened), []);

  return (
    <div className={classNames("card mb-2 rounded-none border-b border-solid border-neutral-300 last:mb-0", className)}>
      <button
        onClick={toggleAccordion}
        className="flex w-full flex-row items-center justify-between bg-inherit py-2 pr-1 text-lg font-semibold md:py-4"
      >
        <p className="text-start text-primary">{title}</p>
        <div className="flex items-center">
          {isOpened ? (
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.50013 0L0 7.13651L1.95843 9L7.5 3.7271L13.0416 9L15 7.13651L7.50013 0Z"
                fill="#d4d4d4"
              />
            </svg>
          ) : (
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.49987 9L15 1.86349L13.0416 0L7.5 5.2729L1.95843 0L0 1.86349L7.49987 9Z"
                fill="#d4d4d4"
              />
            </svg>
          )}
        </div>
      </button>
      {isOpened && <p className="pb-4 text-base text-primary">{description}</p>}
    </div>
  );
};
