import { faCoffee, faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentStory } from '@storybook/react'
import { Button } from './'

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <Button.LeadingVisual>
      <FontAwesomeIcon icon={faCoffee} />
    </Button.LeadingVisual>
    Button
    <Button.Description>This is a test</Button.Description>
    <Button.TrailingVisual>
      <FontAwesomeIcon icon={faSmileBeam} />
    </Button.TrailingVisual>
  </Button>
)

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'success',
          'warning',
          'danger',
          'info',
          'outline',
          'link',
          'ghost',
        ],
      },
      defaultValue: 'primary',
    },
  },
}
