import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type FormType = {
  age: number
  email: string
}
const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormType>({
    defaultValues: {
      age: 18,
    },
  })
  const submit: SubmitHandler<FormType> = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input {...register('email')} label={'email'} />
      <Input {...register('age')} label={'password'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}

export default LoginForm
