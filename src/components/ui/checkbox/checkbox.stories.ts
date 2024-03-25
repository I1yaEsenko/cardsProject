import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'



const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const UnChecked: Story = {
  args: {
    checked: false,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Some text',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'SomeText',
  },
}
