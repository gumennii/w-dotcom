"use client";

import { FC, useCallback, useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
            <FontAwesomeIcon icon={faAngleUp as IconProp} color="#d4d4d4" />
          ) : (
            <FontAwesomeIcon icon={faAngleDown as IconProp} color="#d4d4d4" className="mt-1" />
          )}
        </div>
      </button>
      {isOpened && <p className="pb-4 text-base text-primary">{description}</p>}
    </div>
  );
};
