import { Description, LeadingVisual, TrailingVisual } from './slots'
import { Button as InternalButton } from './Button'

export const Button = Object.assign(InternalButton, {
  /** Description text below primary button text. */
  Description,

  /** Icon (or similar) positioned before `Button` text. */
  LeadingVisual,

  /** Icon (or similar) positioned after `Button` text. */
  TrailingVisual,
})
