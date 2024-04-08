import { Render } from '@/components/ui/table/tabel'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Render,
  tags: ['autodocs'],
  title: 'Components/Tabel',
} satisfies Meta<typeof Render>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
