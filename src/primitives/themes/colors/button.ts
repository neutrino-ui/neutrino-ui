import { lightColors, darkColors } from './primitives';
export const buttonLightStyles = {
  primary: {
    background: lightColors.primary,
    color: lightColors.text
  },
  ghost: {
    background: "transparent",
    color: lightColors.primary
  }
}

export const buttonDarkStyles = {
  primary: {
    background: darkColors.primary,
    color: darkColors.text
  },
  ghost: {
    background: "transparent",
    color: darkColors.primary
  }
}