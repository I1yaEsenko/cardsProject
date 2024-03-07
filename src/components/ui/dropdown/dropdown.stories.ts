import {Meta, StoryObj} from "@storybook/react";
import Dropdown from "@/components/ui/dropdown/dropdown";

const meta = {
    component: Dropdown,
    tags: ['autodocs'],
    title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
    parameters: {
        layout: 'centered',
        background: 'black'
    },
}
