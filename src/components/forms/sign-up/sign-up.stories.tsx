import {Meta, StoryObj} from "@storybook/react";
import SignUp from "@/components/forms/sign-up/sign-up";

const meta = {
    component: SignUp,
    tags: ['autodocs'],
    title: 'Auth/sign-up',
} satisfies Meta<typeof SignUp>
export default meta
type Story = StoryObj<typeof meta>

export const SignUpFormStory: Story ={

}