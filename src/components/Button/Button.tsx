import { forwardRef } from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import createSlots from 'utils/create-slots'
import useSound from 'use-sound'
import Box from 'components/Box/Box'
import './styles/button.module.scss'

type ButtonVariantState = {
  bg: string
  fg: string
  shadow: string
}

export type ButtonState = 'default' | 'hover' | 'focused' | 'pressed' | 'disabled'

type ButtonVariant = Record<ButtonState, ButtonVariantState>

export const getVariantStyles = (
  props: ButtonProps,
  state: ButtonState,
  key: keyof ButtonVariantState,
  fallback?: string
) => {
  const { variant, disabled } = props
  let variantStyles: Partial<ButtonVariant> = {}

  // if (disabled) {
  //   variantStyles = {
  //     default: {
  //     background: 'button.disabled.bg',
  //     color: 'button.disabled.fg',
  //     iconColor: 'button.disabled.fg',
  //   }
  // }

  switch (variant) {
    case 'primary':
      variantStyles = {
        default: {
          bg: 'colors.button.primary.default.bg',
          fg: 'colors.button.primary.default.fg',
          shadow: 'colors.button.shadow',
        },
        hover: {
          bg: 'colors.button.primary.hover.bg',
          fg: 'colors.button.primary.hover.fg',
          shadow: 'colors.button.shadow',
        },
        focused: {
          bg: 'colors.button.primary.focused.bg',
          fg: 'colors.button.primary.focused.fg',
          shadow: 'colors.button.shadow',
        },
        pressed: {
          bg: 'colors.button.primary.pressed.bg',
          fg: 'colors.button.primary.pressed.fg',
          shadow: 'colors.button.shadow',
        },
        disabled: {
          bg: 'colors.button.primary.disabled.bg',
          fg: 'colors.button.primary.disabled.fg',
          shadow: 'colors.button.shadow',
        },
      }
      break
    // case 'danger':
    //   variantStyles = {
    //     color: 'danger.fg',
    //     iconColor: 'danger.fg',
    //     hoverText: 'actionListItem.danger.hoverText',
    //   }
    //   break
    // case 'ghost':
    //   variantStyles = {
    //     background: 'transparent',
    //     color: 'button.ghost.fg',
    //     iconColor: 'danger.fg',
    //     hoverText: 'actionListItem.danger.hoverText',
    //   }
    //   break
    // default:
    //   variantStyles = {
    //     background: 'transparent',
    //     color: 'fg.default',
    //     iconColor: 'fg.muted',
    //     hoverText: 'fg.default',
    //   }
    //   break
  }

  const resolvedState = disabled === true ? 'disabled' : state
  return themeGet(variantStyles?.[resolvedState]?.[key] ?? '', fallback)(props)
}
export interface ButtonProps {
  children: React.ReactNode
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
  background: ${(props) => getVariantStyles(props, 'default', 'bg')};
  box-shadow: 0px 0px 0px 0px transparent;
  border: 0;
  color: ${(props) => getVariantStyles(props, 'default', 'fg')};
  border-radius: ${themeGet('radii.1')};
  display: flex;
  cursor: pointer;
  padding: ${themeGet('space.2')} ${themeGet('space.3')};
  transform: scale(1);
  transform-origin: center center;
  transition: 0.1s ease-out background, 0.1s ease-out color, 0.1s ease-out transform,
    0.1s ease-out box-shadow;

  &:disabled {
    background: ${(props) => getVariantStyles(props, 'disabled', 'bg')};
    color: ${(props) => getVariantStyles(props, 'disabled', 'fg')};
    cursor: not-allowed;
    transform: scale(0.98);
  }

  &:hover:not(:disabled) {
    background: ${(props) => getVariantStyles(props, 'hover', 'bg')};
    box-shadow: 0px 3px 6px 0px ${(props) => getVariantStyles(props, 'hover', 'shadow')};
    color: ${(props) => getVariantStyles(props, 'hover', 'fg')};
    transform: scale(1.02);
  }
  &:active:not(:disabled) {
    background: ${(props) => getVariantStyles(props, 'pressed', 'bg')};
    box-shadow: 0px 0px 2px 0px ${(props) => getVariantStyles(props, 'pressed', 'shadow')};
    color: ${(props) => getVariantStyles(props, 'pressed', 'fg')};
    transform: scale(0.98);
  }
`

const { Slots, Slot } = createSlots(['LeadingVisual', 'Description', 'TrailingVisual'])
export { Slot }
export type ButtonContext = Pick<ButtonProps, 'variant' | 'disabled'>
export const TEXT_ROW_HEIGHT = '20px'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled = false, id, variant = 'primary', ...rest }, ref) => {
    const [play] = useSound('../../assets/sounds/click.wav', { volume: 0.5 })

    return (
      <Slots context={{ variant, disabled }}>
        {(slots) => (
          <button disabled={disabled}>
            {slots.LeadingVisual}
            <Box sx={{ display: 'flex', flexDirection: 'column', fontSize: 2 }}>
              {children}
              {slots.Description}
            </Box>
            {slots.TrailingVisual}
          </button>
        )}
      </Slots>
    )
  }
)
Button.displayName = 'Button'
