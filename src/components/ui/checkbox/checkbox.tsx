import { ComponentPropsWithoutRef } from 'react'

import { TypographyVariant } from '@/components/ui/typography/enum'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import cn from 'classnames'

import s from './checkbox.module.scss'

type CheckBox = {
  label?: TypographyVariant
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'asChild'>

export const Checkbox = (props: CheckBox) => {
  const { className, disabled, label, ...rest } = props
  const classes = cn(s.CheckboxRoot, className)

  return (
    <form>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <CheckboxRadix.Root className={classes} disabled={disabled} {...rest}>
          <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <label className={s.Label} htmlFor={'c1'}>
          Accept terms and conditions.
        </label>
      </div>
    </form>
  )
}
