import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components'

import { space, layout, color } from 'styled-system'

export interface ButtonProps {
  active?: boolean | undefined;
  disabled?: boolean | undefined;
  children?: any;
  className?: string;
}

const ButtonComponent = styled.button<ButtonProps>`
  
  ${space}
  ${layout}
  ${color}
`

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
    <ButtonComponent bg="primary" {...rest} className={classes}>
      {children}
    </ButtonComponent>
  );
};