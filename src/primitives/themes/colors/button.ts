import { darken, desaturate, lighten } from 'polished'
import { lightColors, darkColors } from './primitives'
export const buttonLightStyles = {
  primary: {
    default: {
      bg: lightColors.purple9,
      fg: lightColors.slate1,
    },
    hover: {
      bg: lighten(0.05, lightColors.purple9),
      fg: lightColors.slate1,
    },
    focused: {
      bg: lightColors.purple9,
      fg: lightColors.slate1,
    },
    pressed: {
      bg: lightColors.purple10,
      fg: lightColors.slate1,
    },
    disabled: {
      bg: lighten(0.3, desaturate(0.2, lightColors.purple9)),
      fg: lightColors.slate2,
    },
  },
  ghost: {
    bg: 'transparent',
    fg: lightColors.primary,
  },
  shadow: lightColors.gray8,
}

export const buttonDarkStyles = {
  primary: {
    default: {
      bg: darkColors.purple9,
      fg: darkColors.slate12,
    },
    hover: {
      bg: lighten(0.05, darkColors.purple9),
      fg: darkColors.slate12,
    },
    focused: {
      bg: darkColors.purple9,
      fg: darkColors.slate12,
    },
    pressed: {
      bg: darkColors.purple8,
      fg: darkColors.slate12,
    },
    disabled: {
      bg: darken(0.3, desaturate(0.2, darkColors.purple9)),
      fg: darkColors.slate11,
    },
  },
  ghost: {
    bg: 'transparent',
    fg: darkColors.primary,
  },
  shadow: darkColors.gray4,
}
