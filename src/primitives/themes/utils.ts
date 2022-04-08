export const fontStack = (fonts: Array<string>) => {
  return fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ')
}
