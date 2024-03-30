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
export const SignUp = () => {
  const { control, handleSubmit } = useForm<FormType>({ resolver: zodResolver(logOutSchema) })

  const onSubmit = (data: FormType) => {
    console.log(data)
  }

  return (
    <div className={s.wrapper}>
      <Card>
        <div className={s.typographyTitleWrapper}>
          <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>
            Sign Up
          </Typography>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.typographyWrapper}>
            <div className={s.email}>
              <ControlledInput
                control={control}
                label={'Email'}
                name={'email'}
                placeholder={'Email'}
              />
            </div>
            <div className={s.password}>
              <ControlledInput
                control={control}
                label={'Password'}
                name={'password'}
                placeholder={'Password'}
                type={'password'}
                variant={'password'}
              />
            </div>
            <div className={s.confirmPassword}>
              <ControlledInput
                control={control}
                label={'Confirm password'}
                name={'confirmPassword'}
                placeholder={'Confirm password'}
                type={'password'}
                variant={'password'}
              />
            </div>
          </div>
          <div className={s.button}>
            <Button fullWidth type={'submit'}>
              Sign Up
            </Button>
          </div>
        </form>
        <div className={s.subTitle}>
          <Typography className={s.subTitleBody2} variant={TypographyVariant.body2}>
            Already have an account?
          </Typography>
          <Typography
            as={'a'}
            className={s.subTitleLink}
            href={'/'}
            variant={TypographyVariant.link1}
          >
            Sign In
          </Typography>
        </div>
      </Card>
    </div>
  )
}