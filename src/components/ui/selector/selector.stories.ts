import { Selector } from '@/components/ui/selector/selector'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  component: Selector,
  tags: ['autodocs'],
  title: 'Components/Selector',
} satisfies Meta<typeof Selector>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    label: 'text',
    options: [
      { title: '5', value: '5' },
      { title: '10', value: '10' },
      { title: '20', value: '20' },
      { title: '30', value: '30' },
    ],
    setForm: fn(),
  },
}
