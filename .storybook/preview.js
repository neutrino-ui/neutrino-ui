import ThemeProvider from '../src/context/theme/theme-provider'
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { gray, grayDark } from '@radix-ui/colors';

const storybookConfiguration = {
  brandTitle: 'Neutrino UI',
  brandUrl: 'https://neutrino-ui.com',
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { 
      ...themes.dark, 
      ...storybookConfiguration, 
      base: "dark", 
      barSelectedColor: '#8056C5',
      colorSecondary: '#8056C5',
      barTextColor: '#d0d8dd',
      appContentBg: grayDark.gray1,
      appBg: grayDark.gray2,
    },
    // Override the default light theme
    light: { 
      ...themes.normal, 
      ...storybookConfiguration, 
      base: "light", 
      barSelectedColor: '#5C359A',
      colorSecondary: '#5C359A',
      appContentBg: gray.gray1,
      appBg: gray.gray2,
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider initialTheme={useDarkMode() ? 'dark' : 'light'}>
      <Story />
    </ThemeProvider>
  ),
];