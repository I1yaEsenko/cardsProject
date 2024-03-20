import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from './'

const meta = {
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Blueberry', value: 'blueberry' },
      { label: 'Grapes', value: 'grapes' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'Pineapple', value: 'pineapple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Blueberry', value: 'blueberry' },
      { label: 'Grapes', value: 'grapes' },
    ],
  },
}
