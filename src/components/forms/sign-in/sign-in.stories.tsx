import { SignIn } from '@/components/forms/sign-in/sign-in'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Auth/sign-in',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SignInFormStory: Story = {
  args: { onSubmit: data => console.log(data) },
}
