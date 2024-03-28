import { FC, ReactNode } from "react";
import classNames from "classnames";

type AccordionProps = {
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export const Accordion: FC<AccordionProps> = ({ className, title, description, children }) => (
  <div className={classNames("text-primary", className)}>
    {title && <h3 className="pb-4 text-3xl font-extrabold">{title}</h3>}
    {description && <p className="pb-6 text-lg">{description}</p>}
    {children}
  </div>
);
