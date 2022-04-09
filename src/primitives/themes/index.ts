import { buttonDarkStyles, buttonLightStyles, lightColors, darkColors } from './colors'
import { fontStack } from './utils'

const breakpoints = ['544px', '768px', '1012px', '1280px']

const fonts = {
  normal: fontStack([
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
  ]),
  mono: fontStack([
    'SFMono-Regular',
    'Consolas',
    'Liberation Mono',
    'Menlo',
    'Courier',
    'monospace',
  ]),
}

const fontWeights = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600,
}

const sizes = {
  small: '544px',
  medium: '768px',
  large: '1012px',
  xlarge: '1280px',
}

const fontSizes = ['11px', '12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px']

const radii = ['0', '3px', '6px', '100px']

const space = [
  '0',
  '4px',
  '8px',
  '12px',
  '16px',
  '20px',
  '24px',
  '32px',
  '40px',
  '48px',
  '56px',
  '64px',
  '80px',
  '96px',
  '112px',
  '128px',
]

const neutrinoTheme = {
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  colors: {
    ...lightColors,
    button: buttonLightStyles,
    modes: {
      dark: {
        ...darkColors,
        button: buttonDarkStyles,
      },
    },
  },
  radii,
  space,
  sizes,
}

export default neutrinoTheme
