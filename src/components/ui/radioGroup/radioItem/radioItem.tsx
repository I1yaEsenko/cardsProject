import { ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioItem.module.scss'

export type Option = {
  label: string
  value: string
}
//разобраться с рефОм !!!
export const RadioItem = forwardRef<ElementRef<typeof RadioGroup.Item>, Option>(
  ({ label, value }, ref) => {
    return (
      <div className={s.container}>
        <RadioGroup.Item className={s.radio} disabled={false} id={value} ref={ref} value={value}>
          <RadioGroup.Indicator className={s.indicator} />
        </RadioGroup.Item>
        <Typography
          as={'label'}
          className={s.label}
          htmlFor={value}
          variant={TypographyVariant.body2}
        >
          {label}
        </Typography>
      </div>
    )
  }
)
