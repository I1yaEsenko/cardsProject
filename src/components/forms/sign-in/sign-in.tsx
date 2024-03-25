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
export const SignIn = () => {
  const { control, handleSubmit } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <div className={s.wrapper}>
      <Card>
        <div className={s.typographyTitleWrapper}>
          <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>
            Sign In
          </Typography>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.typographyWrapper}>
            <div className={s.email}>
              <ControlledInput control={control} label={'Email'} name={'email'} />
            </div>
            <div className={s.password}>
              <ControlledInput
                control={control}
                label={'Password'}
                name={'password'}
                type={'password'}
                variant={'password'}
              />
            </div>
            <div className={s.tapographyCheckBox}>
              <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
            </div>
            <div className={s.forgotText}>
              <Typography variant={TypographyVariant.body2}>Forgot Password?</Typography>
            </div>
          </div>
          <div className={s.button}>
            <Button fullWidth type={'submit'}>
              Sign In
            </Button>
          </div>
        </form>
        <div className={s.subTitle}>
          <Typography className={s.subTitleBody2} variant={TypographyVariant.body2}>
            {"Don't have an account?"}
          </Typography>
          <Typography className={s.subTitleLink} variant={TypographyVariant.link1}>
            Sign Up
          </Typography>
        </div>
      </Card>
    </div>
  )
}
//TODO: спросить насчет  Typography и их margin можно ли их убрать в css ли нет
