import { type FC, useCallback, useState } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-react';
import { type AccordionItemProps } from '.';

export const AccordionItem: FC<AccordionItemProps> = ({ styles }) => {
  const [isOpened, setOpened] = useState(false);
  const toggleAccordion = useCallback(() => setOpened(isOpened => !isOpened), []);

  return (
    <div className={classNames('card rounded-none mb-2 last:mb-0 border-b border-solid border-neutral-300', styles?.container)}>
      <button
        onClick={toggleAccordion}
        className={classNames(
          'flex flex-row justify-between items-center p-2 md:p-4 text-2xl font-semibold bg-inherit w-full',
          styles?.toggleButton
        )}
      >
        <UniformText
          placeholder="Title goes here"
          parameterId="title"
          as="p"
          className={classNames('text-start pr-2 text-primary', styles?.title)}
        />
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
      {isOpened && (
        <UniformText
          placeholder="Description goes here"
          parameterId="description"
          as="p"
          className={classNames('text-primary text-base px-2 pb-4 md:px-4', styles?.description)}
        />
      )}
    </div>
  );
};
