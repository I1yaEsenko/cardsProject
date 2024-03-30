import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Check } from '@/assets'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import cn from 'classnames'

import s from './checkbox.module.scss'

type CheckBox = {
  checked?: boolean
  label?: string

  onValueChange?: (checked: boolean) => void
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckBox>(
  ({ checked, className, disabled, label, name, onValueChange, ...rest }, ref) => {
    return (
      <Typography
        as={'label'}
        className={cn(s.label, { [s.disabled]: disabled }, className)}
        variant={TypographyVariant.body2}
      >
        <CheckboxRadix.Root
          checked={checked}
          className={s.checkboxRoot}
          disabled={disabled}
          onCheckedChange={onValueChange}
          {...rest}
          ref={ref}
        >
          <CheckboxRadix.Indicator className={s.checkboxIndicator}>
            <Check />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label}
      </Typography>
    )
  }
)
