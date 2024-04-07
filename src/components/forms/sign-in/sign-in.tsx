import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlled-input'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import { emailSchema, passwordSchema } from '@/components/utils/zodSchemes/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>
type PropsType = {
  onSubmit: (data: FormValues) => void
}
export const SignIn = ({ onSubmit }: PropsType) => {
  const { control, handleSubmit } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })
  const onSubmitHandler = (data: FormValues) => {
    onSubmit(data)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={TypographyVariant.h1}>
        Sign In
      </Typography>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.wrapper}>
          <ControlledInput control={control} label={'Email'} name={'email'} />
          <ControlledInput
            control={control}
            label={'Password'}
            name={'password'}
            type={'password'}
            variant={'password'}
          />
        </div>
        <ControlledCheckbox
          className={s.checkBox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <Typography className={s.forgot} variant={TypographyVariant.body2}>
          Forgot Password?
        </Typography>

        <Button className={s.button} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.subTitleBody} variant={TypographyVariant.body2}>
        Don't have an account?
      </Typography>
      <Typography className={s.subTitleLink} variant={TypographyVariant.link1}>
        Sign Up
      </Typography>
    </Card>
  )
}
