import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/controlled/controlled-input'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './new-password.module.scss'

const newPasswordSchema = z.object({
  newPassword: z.string().min(3),
})

type FormType = z.infer<typeof newPasswordSchema>
type PropsType = {
  onSubmit: (data: FormType) => void
}
const NewPassword = ({ onSubmit }: PropsType) => {
  const { control, handleSubmit } = useForm<FormType>({ resolver: zodResolver(newPasswordSchema) })
  const onSubmitHandler = (data: FormType) => {
    onSubmit(data)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={TypographyVariant.h1}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.wrapper}>
          <ControlledInput
            className={s.input}
            control={control}
            label={'Password'}
            name={'newPassword'}
          />
          <Typography className={s.text} variant={TypographyVariant.body1}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
        <Button fullWidth type={'submit'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}

export default NewPassword
