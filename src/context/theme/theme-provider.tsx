import { FC } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import useColorTheme, { ColorThemeOption } from '../../hooks/use-color-theme'

export interface ThemeProviderProps {
  initialTheme?: ColorThemeOption
  syncWithSystem?: boolean
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme, syncWithSystem }) => {
  const activeTheme = useColorTheme({ targetColorTheme: initialTheme, syncWithSystem })
  return <SCThemeProvider theme={activeTheme?.theme ?? {}}>{children}</SCThemeProvider>
}

export default ThemeProvider
