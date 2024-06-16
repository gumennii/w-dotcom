"use client";

import { FC, useCallback, useState, ReactNode, useEffect } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useParams } from "next/navigation";

type AccordionProgramItemProps = {
  title?: string;
  children: ReactNode;
  id: string;
  className?: string;
  isOpen?: boolean;
};

export const AccordionProgramItem: FC<AccordionProgramItemProps> = ({
  title,
  children,
  id,
  className,
  isOpen = false,
}) => {
  const params = useParams();
  const [isOpened, setOpened] = useState(isOpen);
  const toggleAccordion = useCallback(() => setOpened(isOpened => !isOpened), []);

  useEffect(() => {
    if (window.location.hash === `#${id}`) setOpened(true);
  }, [params, id]);

  return (
    <div
      className={classNames("card mb-2 rounded-none border-b-2 border-solid border-neutral-300 last:mb-0", className)}
      id={id}
    >
      {title && (
        <button
          onClick={toggleAccordion}
          className="flex w-full flex-row items-center justify-between bg-inherit mt-2 pb-1 pr-1 text-lg font-semibold md:mt-4 md:pb-2"
        >
          <h2 className="font-sant font-semibold text-xl lg:text-2xl">{title}</h2>
          <div className="flex items-center">
            {isOpened ? (
              <FontAwesomeIcon icon={faAngleUp as IconProp} color="#d4d4d4" />
            ) : (
              <FontAwesomeIcon icon={faAngleDown as IconProp} color="#d4d4d4" className="mt-1" />
            )}
          </div>
        </button>
      )}
      {isOpened && <div className="py-4 text-base text-primary">{children}</div>}
    </div>
  );
};
