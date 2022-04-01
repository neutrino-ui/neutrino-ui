import { ComponentStory } from '@storybook/react';
import { Button } from './Button';



export const Default: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;
export const Active: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;
Active.args = {
  active: true
}
export const Disabled: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;
Disabled.args = {
  active: false,
  disabled: true
}

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    active: { control: { type: 'boolean' }, defaultValue: false },
    className: { table: { disable: true } },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
  },
};