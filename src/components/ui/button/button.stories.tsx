import type { Meta, StoryObj } from '@storybook/react'

import LogOut from '@/assets/icons/components/LogOut'

import { Button } from './'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button primary',
    disabled: false,
    variant: 'primary',
  },
}
export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <LogOut height={16} width={16} />
        Sign out
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',

    href: 'https://google.com',
    variant: 'link',
  },
}
