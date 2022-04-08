import themeGet from '@styled-system/theme-get'
import Box from 'components/Box/Box'
import { merge, SxProp } from 'utils/sx'
import { Slot, ButtonContext, TEXT_ROW_HEIGHT } from './Button'

type VisualProps = SxProp & React.HTMLAttributes<HTMLSpanElement>

export const LeadingVisualContainer: React.FC<VisualProps> = ({ sx = {}, ...props }) => {
  return (
    <Box
      as='span'
      sx={merge(
        {
          maxHeight: TEXT_ROW_HEIGHT, // match height of text row
          minWidth: themeGet('space.3'),
          maxWidth: TEXT_ROW_HEIGHT, // square (same as height)
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          marginRight: 2,
        },
        sx as SxProp
      )}
      {...props}
    />
  )
}

export type ButtonLeadingVisualProps = VisualProps
export const LeadingVisual: React.FC<VisualProps> = ({ sx = {}, ...props }) => {
  return (
    <Slot name='LeadingVisual'>
      {({ variant, disabled }: ButtonContext) => (
        <LeadingVisualContainer
          sx={merge(
            {
              svg: { fontSize: 0 },
            },
            sx as SxProp
          )}
          {...props}
        >
          {props.children}
        </LeadingVisualContainer>
      )}
    </Slot>
  )
}

export type ActionListTrailingVisualProps = VisualProps
export const TrailingVisual: React.FC<VisualProps> = ({ sx = {}, ...props }) => {
  return (
    <Slot name='TrailingVisual'>
      {({ variant, disabled }: ButtonContext) => (
        <Box
          as='span'
          sx={merge(
            {
              maxHeight: TEXT_ROW_HEIGHT,
              flexShrink: 0,
              marginLeft: 2,
            },
            sx as SxProp
          )}
          {...props}
        >
          {props.children}
        </Box>
      )}
    </Slot>
  )
}
