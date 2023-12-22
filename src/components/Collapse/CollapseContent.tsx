import React from 'react';
import cn from '~/utils/style';

export type CollapseContentProps = React.HTMLAttributes<HTMLDivElement>;

const CollapseContent = ({
  children,
  className,
  ...props
}: CollapseContentProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(
        'collapse-content',
        'text-base',
        className,
      )}>
      {children}
    </div>
  );
};

export default CollapseContent;
