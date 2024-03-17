import {Meta, StoryObj} from "@storybook/react";
import ForgotForm from "@/components/forms/forgotForm/forgotForm";

const meta = {
    component: ForgotForm,
    tags: ['autodocs'],
    title: 'Forgot/ForgotForm',
} satisfies Meta<typeof ForgotForm>
export default meta
type Story = StoryObj<typeof meta>

export const ForgotForm1: Story ={

}