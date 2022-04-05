import ThemeProvider from '../src/context/theme/theme-provider'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider initialTheme="dark">
      <Story />
    </ThemeProvider>
  ),
];