import Outside from '@/assets/icons/outside'
import Userpic from '@/assets/icons/userpic'
import Dropdown from '@/components/ui/dropdown/dropdown'
import DropdownLogin from '@/components/ui/dropdown/dropdownLogin/dropdownLogin'
import DropdownUser from '@/components/ui/dropdown/dropdownUser/dropdownUser'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Dropdown,
  parameters: {
    background: 'black',
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>
// @ts-ignore
export const UserComponent: Story = {
  args: {
    children: DropdownUser(),
    iconButton: Userpic(),
  },
}
export const LoginComponent: Story = {
  args: {
    children: DropdownLogin(),
    iconButton: Outside(),
  },
}
