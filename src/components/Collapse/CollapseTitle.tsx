import React from 'react';
import cn from '~/utils/style';

export type CollapseTitleProps = React.HTMLAttributes<HTMLDivElement>;

const CollapseTitle = ({
  children,
  className,
  ...props
}: CollapseTitleProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(
        'collapse-title',
        'text-lg font-semibold, text-primary',
        className
      )}>
      {children}
    </div>
  );
};

export default CollapseTitle;
