import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { themeGet } from '@styled-system/theme-get'

export interface ButtonProps {
  active?: boolean | undefined
  disabled?: boolean | undefined
  children?: any
  className?: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link' | 'ghost'
}

const ButtonComponent = styled.button<ButtonProps>`
  background: ${(props) => themeGet(`colors.button.${props.variant}.background`)(props)};
  border: 0;
  color: ${(props) => themeGet(`colors.button.${props.variant}.color`)(props)};
  border-radius: ${themeGet('radii.1')};
  cursor: pointer;
  padding: ${themeGet('space.2')} ${themeGet('space.3')};
  transition: 0.1s ease-out background;

  &:hover {
    background: ${(props) =>
      lighten(0.1, themeGet(`colors.button.${props.variant}.background`)(props))};
  }
  &:active {
    background: ${(props) =>
      darken(0.1, themeGet(`colors.button.${props.variant}.background`)(props))};
  }
`

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  return (
    <ButtonComponent {...rest} variant={variant}>
      {children}
    </ButtonComponent>
  )
}
