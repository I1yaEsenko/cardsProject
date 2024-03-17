import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

export type Option = {
  label: string
  value: string
}

export type RadioGroupProps = {
  errorMessage?: string
  options?: Option[]
} & ComponentPropsWithoutRef<'input'>

export const Radio = (props: RadioGroupProps) => {
  const { errorMessage, options, ...rest } = props

  return (
    <RadioGroup.Root className={s.root}>
      {options?.map(option => (
        <div className={s.container} key={option.value}>
          <RadioGroup.Item
            className={s.radio}
            disabled={false}
            id={option.value}
            value={option.value}
          >
            <RadioGroup.Indicator className={s.indicator} />
          </RadioGroup.Item>
          <Typography as={'label'} className={s.label} htmlFor={option.value}>
            {option.label}
          </Typography>
        </div>
      ))}
    </RadioGroup.Root>
  )
}
