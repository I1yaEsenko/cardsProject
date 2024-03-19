import {useController, useForm} from 'react-hook-form'

import { Button } from '../../ui/button'
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";


type FormValues = {
    email: string
    password: string,
    rememberMe:boolean
}


export const LogInForm = () => {
    const {control, register, handleSubmit } = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    const {field: {value, onChange}, } = useController({
        name: 'rememberMe',
        control,
        defaultValue:false
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('email')} label={'email'} />
            <Input {...register('password')} label={'password'} />
            <Checkbox checked={value}    onCheckedChange={onChange} label={'dodod'}/>
            <Button type="submit">Submit</Button>
        </form>
    )
}
export default LogInForm;