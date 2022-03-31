import React from 'react';
import classnames from 'classnames';

export interface ButtonProps {
  active?: boolean | undefined;
  disabled?: boolean | undefined;
  children?: any;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  active,
  disabled,
  className,
  children,
  ...rest
}) => {
  const classes = classnames(
    'Button',
    active && `Button--active`,
    disabled && `Button--disabled`,
    className
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};