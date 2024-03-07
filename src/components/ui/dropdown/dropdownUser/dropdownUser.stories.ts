import {Meta, StoryObj} from "@storybook/react";
import DropdownUser from "@/components/ui/dropdown/dropdownUser/dropdownUser";

const meta = {
    component: DropdownUser,
    tags: ['autodocs'],
    title: 'Components/DropdownUser',
} satisfies Meta<typeof DropdownUser>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
    parameters: {
        layout: 'centered',
        background: 'black'
    },
}
