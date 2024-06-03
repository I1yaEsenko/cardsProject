import { ForgotForm } from '@/components/forms/forgot-form/forgot-form'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ForgotForm,
  tags: ['autodocs'],
  title: 'Auth/forgotForm',
} satisfies Meta<typeof ForgotForm>

export default meta
type Story = StoryObj<typeof meta>

export const Forgot: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
