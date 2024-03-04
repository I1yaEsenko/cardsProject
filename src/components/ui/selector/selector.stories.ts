import {Meta, StoryObj} from "@storybook/react";
import Selector from "@/components/ui/selector/selector";

const meta = {
    component: Selector,
    tags: ['autodocs'],
    title: 'Components/Selector',
} satisfies Meta<typeof Selector>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {

}