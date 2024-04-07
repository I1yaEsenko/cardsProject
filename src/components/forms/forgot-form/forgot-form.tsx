import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlled-input'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import { emailSchema } from '@/components/utils/zodSchemes/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-form.module.scss'

const forgotSchema = z.object({
  email: emailSchema,
})

type FormType = z.infer<typeof forgotSchema>
type PropsType = {
  onSubmit: (data: FormType) => void
}
export const ForgotForm = ({ onSubmit }: PropsType) => {
  const { control, handleSubmit } = useForm<FormType>({ resolver: zodResolver(forgotSchema) })

  const onSubmitHandler = (data: FormType) => {
    onSubmit(data)
  }

  return (
    <div className={s.wrapper}>
      <Card>
        <div className={s.typographyTitleWrapper}>
          <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>
            Forgot your password?
          </Typography>
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className={s.typographyEmailWrapper}>
            <ControlledInput control={control} label={'Email'} name={'email'} />

            <Typography className={s.emailTypography} variant={TypographyVariant.body2}>
              Enter your email address and we will send you further instructions
            </Typography>
          </div>
          <div className={s.typographyBottom}>
            <Button className={s.button} fullWidth type={'submit'}>
              Send Instructions
            </Button>

            <Typography className={s.typographyBottomBody2} variant={TypographyVariant.body2}>
              Did you remember your password?
            </Typography>

            <Typography className={s.link} variant={TypographyVariant.link2}>
              Try logging in
            </Typography>
          </div>
        </form>
      </Card>
    </div>
  )
}
