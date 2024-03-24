import {Meta, StoryObj} from "@storybook/react";
import Form from "@/components/forms/form";
import SignUpForm from "@/components/forms/signUpForm/signUpForm";
import SignIn from "@/components/forms/sign-in/sign-in";
import ForgotForm from "@/components/forms/forgotForm/forgotForm";

const meta = {
    component: Form,
    tags: ['autodocs'],
    title: 'Forgot/Form',
} satisfies Meta<typeof Form>
export default meta
type Story = StoryObj<typeof meta>

export const SignUpFormStory: Story = {
    args: {
        children: SignUpForm()
    }

}
export const SignInFormStory: Story = {
    args: {
        children: SignIn()
    }

}
export const ForgotFormStory: Story = {
    args: {
        children: ForgotForm()
    }

}