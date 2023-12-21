import React from 'react';
import cn from '~/utils/style';


import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import DropdownToggle from './DropdownToggle';

export type DropdownProps<T extends HTMLElement = HTMLDivElement> =
  React.HTMLAttributes<T> &
    {
      horizontal?: 'left' | 'right'
      vertical?: 'top' | 'bottom'
      end?: boolean
      open?: boolean
    };

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      children,
      className,
      horizontal,
      vertical,
      end,
      open,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <div
        role="listbox"
        {...props}
        ref={ref}
        className={cn(
          'dropdown',
          {'dropdown-left': horizontal === 'left'},
          {'dropdown-right': horizontal === 'right'},
          {'dropdown-top': vertical === 'top'},
          {'dropdown-bottom': vertical === 'bottom'},
          {'dropdown-end': end},
          {'dropdown-open': open},
          className
        )}
      >
        {children}
      </div>
    )
  }
)

export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
});
