import {Meta, StoryObj} from "@storybook/react";
import SignInForm from "@/components/forms/signInForm/signInForm";

const meta = {
    component: SignInForm,
    tags: ['autodocs'],
    title: 'Forgot/signInForm',
} satisfies Meta<typeof SignInForm>
export default meta
type Story = StoryObj<typeof meta>

export const SignInFormStory: Story ={

}