import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlled-input'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import { emailSchema, passwordSchema } from '@/components/utils/zodSchemes/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

const logOutSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: emailSchema,
    password: passwordSchema,
  })
  .refine(
    values => {
      return values.password === values.confirmPassword
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    }
  )

type FormType = z.infer<typeof logOutSchema>
type PropsType = {
  onSubmit: (data: FormType) => void
}
export const SignUp = ({ onSubmit }: PropsType) => {
  const { control, handleSubmit } = useForm<FormType>({ resolver: zodResolver(logOutSchema) })

  const onSubmitHandler = (data: FormType) => {
    onSubmit(data)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={TypographyVariant.h1}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.typographyWrapper}>
          <ControlledInput
            className={s.email}
            control={control}
            label={'Email'}
            name={'email'}
            placeholder={'Email'}
          />
          <ControlledInput
            control={control}
            label={'Password'}
            name={'password'}
            placeholder={'Password'}
            type={'password'}
            variant={'password'}
          />
          <ControlledInput
            control={control}
            label={'Confirm password'}
            name={'confirmPassword'}
            placeholder={'Confirm password'}
            type={'password'}
            variant={'password'}
          />
        </div>
        <Button className={s.button} fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
      <div className={s.subTitle}>
        <Typography className={s.subTitleBody2} variant={TypographyVariant.body2}>
          Already have an account?
        </Typography>
        <Typography className={s.subTitleLink} variant={TypographyVariant.link1}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
