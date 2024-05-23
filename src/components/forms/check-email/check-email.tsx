import { Link } from 'react-router-dom'

import mail from '@/assets/icons/mail.svg'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <div className={s.wrapper}>
        <Typography variant={TypographyVariant.h1}>Check Email</Typography>
        <div className={s.content}>
          <img alt={'Check email'} className={s.img} src={mail} />
          <Typography className={s.text} variant={TypographyVariant.body2}>
            We’ve sent an Email with instructions to example@mail.com
          </Typography>
        </div>
        <Button as={Link} fullWidth to={'/sign-in'}>
          Back to Sign In
        </Button>
      </div>
    </Card>
  )
}
