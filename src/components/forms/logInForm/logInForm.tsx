import {useForm} from 'react-hook-form'

import {Button} from '../../ui/button'
import {Input} from "@/components/ui/input";
import { z } from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import ControlledCheckbox from "@/components/ui/controlled/controlled-checkbox/controlled-checkbox";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean()
})
type FormValues = z.infer<typeof loginSchema>
export const LogInForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: {errors}} = useForm<FormValues>({ resolver:zodResolver(loginSchema),})

    console.log(errors)
    const onSubmit = (data: FormValues) => {
        debugger
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('email')}
                error={!!errors.email?.message}
                   errorMessage={errors?.email?.message}
                   label={'email'}/>
            <Input {...register('password', )}
                error={!!errors.password?.message}
                   errorMessage={errors?.password?.message}
                   label={'password'}/>
            <ControlledCheckbox label={'string'} name={'rememberMe'} control ={control} />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default LogInForm;