import { SignUp } from '@/components/forms/sign-up/sign-up'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Auth/sign-up',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpFormStory: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
