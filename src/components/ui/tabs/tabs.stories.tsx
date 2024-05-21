import { Switcher } from '@/components/ui/tabs/tabs'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Switcher,
  parameters: {
    background: 'black',
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Switcher>

export default meta
type Story = StoryObj<typeof meta>
// @ts-ignore
export const UserComponent: Story = {}
