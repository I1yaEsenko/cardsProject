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

const options = [
  { title: '5', value: '5' },
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
]

export const Primary: Story = {
  args: {
    defaultValue: options[2].value,
    disabled: true,
    label: 'kfkf',
    large: true,
    options,
    setForm: fn(),
  },
}
export const Second: Story = {
  args: {
    defaultValue: options[2].value,
    disabled: false,
    label: 'kfkf',
    large: true,
    options,
    setForm: fn(),
  },
}
