import { lightColors, darkColors } from './colors/primitives';
import { buttonDarkStyles, buttonLightStyles } from './colors/button';
import {fontStack} from './utils';
const neutrinoTheme = {
  fonts: {
    normal: fontStack([
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji'
    ]),
    mono: fontStack(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'])
  },
  colors: {
    ...lightColors,
    button: buttonLightStyles,
    modes: {
      dark: {
        ...darkColors,
        button: buttonDarkStyles
      }
    }
  },

  radii: ['0', '3px', '6px', '100px'],
  space: ['0', '4px', '8px', '12px', '16px', '20px', '24px', '32px', '40px', '48px', '56px', '64px', '80px', '96px', '112px', '128px']
}

export default neutrinoTheme;