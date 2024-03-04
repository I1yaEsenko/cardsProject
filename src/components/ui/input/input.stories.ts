import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    disabled: false,
    error: false,
    errorMessage: 'Error!',
    label: 'Input',
    type: 'text',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    error: false,
    errorMessage: 'The password must be more than 3 characters.',
    label: 'Input',
    type: 'password',
    variant: 'password',
  },
}

export const Search: Story = {
  args: {
    disabled: false,
    error: false,
    errorMessage: 'Error!',
    search: true,
    type: 'search',
    variant: 'search',
  },
}
