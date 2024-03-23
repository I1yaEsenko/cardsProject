import {useForm} from 'react-hook-form'

import {Button} from '../../ui/button'

import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {DevTool} from "@hookform/devtools";
import ControlledInput from "@/components/ui/controlled/controlled-input/controlled-input";
import ControlledCheckbox from "@/components/ui/controlled/controlled-checkbox/controlled-checkbox";
// import ControlledInput from "@/components/ui/controlled/controlled-input";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean()
})
type FormValues = z.infer<typeof loginSchema>
export const LogInForm = () => {
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({resolver: zodResolver(loginSchema),})

    console.log(errors)
    const onSubmit = (data: FormValues) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DevTool control={control}/>
            <ControlledInput name={'email'} label={'email'} control={control}/>
            <ControlledInput name={'password'} label={'password'} control={control}/>
            <ControlledCheckbox label={'string'} name={'rememberMe'} control={control}/>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default LogInForm;