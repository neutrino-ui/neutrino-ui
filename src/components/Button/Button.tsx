import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { themeGet } from '@styled-system/theme-get'
import createSlots from 'utils/create-slots'

export const getVariantStyles = (
  variant: ButtonProps['variant'],
  disabled: ButtonProps['disabled']
) => {
  if (disabled) {
    return {
      color: 'primer.fg.disabled',
      iconColor: 'primer.fg.disabled',
      annotationColor: 'primer.fg.disabled',
    }
  }

  switch (variant) {
    case 'danger':
      return {
        color: 'danger.fg',
        iconColor: 'danger.fg',
        annotationColor: 'fg.muted',
        hoverColor: 'actionListItem.danger.hoverText',
      }
    default:
      return {
        color: 'fg.default',
        iconColor: 'fg.muted',
        annotationColor: 'fg.muted',
        hoverColor: 'fg.default',
      }
  }
}
export interface ButtonProps {
  disabled?: boolean
  id?: string
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'outline'
    | 'link'
    | 'ghost'
}

const ButtonComponent = styled.button<ButtonProps>`
  align-items: center;
  background: ${(props) => themeGet(`colors.button.${props.variant}.background`)(props)};
  border: 0;
  color: ${(props) => themeGet(`colors.button.${props.variant}.color`)(props)};
  border-radius: ${themeGet('radii.1')};
  display: flex;
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

const { Slots, Slot } = createSlots([
  'LeadingVisual',
  'InlineDescription',
  'BlockDescription',
  'TrailingVisual',
])
export { Slot }
export type ButtonContext = Pick<ButtonProps, 'variant' | 'disabled'>
export const TEXT_ROW_HEIGHT = '20px'

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  id,
  variant = 'primary',
  ...rest
}) => {
  return (
    <Slots context={{ variant, disabled }}>
      {(slots) => (
        <ButtonComponent {...rest} variant={variant}>
          {slots.LeadingVisual}
          {children}
          {slots.TrailingVisual}
        </ButtonComponent>
      )}
    </Slots>
  )
}
