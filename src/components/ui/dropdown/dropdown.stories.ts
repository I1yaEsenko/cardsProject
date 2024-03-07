import {Meta, StoryObj} from "@storybook/react";
import Dropdown from "@/components/ui/dropdown/dropdown";
import DropdownUser from "@/components/ui/dropdown/dropdownUser/dropdownUser";
import DropdownLogin from "@/components/ui/dropdown/dropdownLogin/dropdownLogin";
import Outside from "@/assets/icons/outside";
import Userpic from "@/assets/icons/userpic";


const meta = {
    component: Dropdown,
    tags: ['autodocs'],
    title: 'Components/Dropdown',
    parameters: {
        layout: 'centered',
        background: 'black'
    },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>
// @ts-ignore
export const UserComponent: Story = {
    args:{
        children:DropdownUser(),
        iconButton: Userpic()
    }


}
export const LoginComponent: Story = {
    args:{
        children:DropdownLogin(),
        iconButton: Outside()
    }


}
