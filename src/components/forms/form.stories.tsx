import {Meta, StoryObj} from "@storybook/react";
import Form from "@/components/forms/form";
import SignUp from "@/components/forms/sign-up/sign-up";
import SignIn from "@/components/forms/sign-in/sign-in";
import ForgotForm from "@/components/forms/forgot-form/forgot-form";

const meta = {
    component: Form,
    tags: ['autodocs'],
    title: 'Forgot/Form',
} satisfies Meta<typeof Form>
export default meta
type Story = StoryObj<typeof meta>

export const SignUpFormStory: Story = {
    args: {
        children: SignUp()
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