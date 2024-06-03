// import CheckEmail from '@/components/forms/check-email/check-email'
import { CheckEmail } from '@/components/forms/check-email/check-email'
import { Meta, StoryObj } from '@storybook/react'
// import {CheckEmail} from "@/components/forms/check-email/check-email";

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/checkForm',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Checkemail: Story = {}
