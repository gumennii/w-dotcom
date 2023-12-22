import { type FC } from 'react';
import classNames from 'classnames';
import { UniformSlot, UniformText } from '@uniformdev/canvas-react';
import { type AccordionProps } from '.';

export const Accordion: FC<AccordionProps> = ({ styles }) => (
  <div className={classNames('text-primary', styles?.container)}>
    <UniformText
      placeholder="Title goes here"
      parameterId="title"
      as="p"
      className={classNames('text-3xl font-extrabold pb-4', styles?.title)}
    />
    <UniformText
      placeholder="Description goes here"
      parameterId="description"
      as="p"
      className={classNames('text-lg pb-6', styles?.description)}
    />
    <UniformSlot name="items" />
  </div>
);
