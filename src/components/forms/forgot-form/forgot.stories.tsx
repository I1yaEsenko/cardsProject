import SignIn from "@/components/forms/sign-in/sign-in";
import {Meta, StoryObj} from "@storybook/react";
import ForgotForm from "@/components/forms/forgot-form/forgot-form";

const meta = {
    component: ForgotForm,
    tags: ['autodocs'],
    title: 'Auth/forgotForm',
} satisfies Meta<typeof ForgotForm>
export default meta
type Story = StoryObj<typeof meta>

export const FotFormStory: Story ={

}