import {Meta, StoryObj} from "@storybook/react";
import SignUpForm from "@/components/forms/signUpForm/signUpForm";

const meta = {
    component: SignUpForm,
    tags: ['autodocs'],
    title: 'Forgot/signUpForm',
} satisfies Meta<typeof SignUpForm>
export default meta
type Story = StoryObj<typeof meta>

export const SignUpFormStory: Story ={

}