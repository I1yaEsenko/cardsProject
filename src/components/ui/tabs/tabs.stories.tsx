import {Meta, StoryObj} from "@storybook/react";
import Switcher from "@/components/ui/tabs/tabs";

const meta = {
    component: Switcher,
    tags: ['autodocs'],
    title: 'Components/Tabs',
    parameters: {
        layout: 'centered',
        background: 'black'
    },
} satisfies Meta<typeof Switcher>

export default meta
type Story = StoryObj<typeof meta>
// @ts-ignore
export const UserComponent: Story = {


}