import type { Meta, StoryObj } from '@storybook/react'
import LogInForm from "@/components/forms/logInForm/logInForm";
import {useState} from "react";



const meta = {
    title: 'Auth/LoginForm',
    component: LogInForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LogInForm >

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {

}