import { render, RenderOptions } from '@testing-library/react'
import React from 'react'
import ThemeProvider, { ThemeProviderProps } from '../context/theme/theme-provider'

type NeutrinoRenderOptions = {
  providerProps?: ThemeProviderProps
} & RenderOptions

const neutrinoRender = (ui: React.ReactElement, options?: NeutrinoRenderOptions) => {
  const { providerProps, ...renderOptions } = options || {}
  return render(<ThemeProvider {...providerProps}>{ui}</ThemeProvider>, renderOptions)
}
export default neutrinoRender
