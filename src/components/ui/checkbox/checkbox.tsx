import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import cn from 'classnames'

import s from './checkbox.module.scss'

type CheckBox = {
  label?: string
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'asChild'>

export const Checkbox = (props: CheckBox) => {
  const { className, disabled, label, ...rest } = props

  return (
    <Typography
      as={'label'}
      className={cn(s.label, { [s.disabled]: disabled }, className)}
      variant={TypographyVariant.body2}
    >
      <CheckboxRadix.Root className={s.checkboxRoot} disabled={disabled} {...rest}>
        <CheckboxRadix.Indicator className={s.checkboxIndicator}>
          <CheckIcon />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label}
    </Typography>
  )
}
