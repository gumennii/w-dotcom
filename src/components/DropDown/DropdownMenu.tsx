import React from 'react';
import cn from '~/utils/style';

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement>;

const DropdownMenu = ({
  className,
  ...props
}: DropdownMenuProps) => {
  return (
    <ul
      {...props}
      tabIndex={0}
      className={cn(
        'dropdown-content menu p-2 shadow bg-base-100 rounded-box',
        className
      )}
      role="menu"
    />
  );
};

export default DropdownMenu;
