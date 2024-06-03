import { NewPassword } from '@/components/forms/new-password/new-password'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: NewPassword,
  tags: ['autodocs'],
  title: 'Auth/new-password',
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const NewPasswordStory: Story = {
  args: {
    onSubmit: el => console.log(el),
  },
}
