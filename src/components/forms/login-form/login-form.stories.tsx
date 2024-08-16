import LoginForm from '@/components/forms/login-form/login-form'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Forgot: Story = {}
