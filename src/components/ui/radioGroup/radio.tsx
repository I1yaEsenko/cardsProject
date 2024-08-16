import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Option, RadioItem } from '@/components/ui/radioGroup/radioItem'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio.module.scss'

export type RadioGroupProps = {
  errorMessage?: string
  options?: Option[]
} & Omit<ComponentPropsWithoutRef<typeof RadioGroup.Root>, 'children'>

export const Radio = forwardRef<ElementRef<typeof RadioGroup.Root>, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    const { errorMessage, options, ...rest } = props
    const classes = {
      root: clsx(s.root, className),
    }

    return (
      <RadioGroup.Root className={classes.root} ref={ref} {...rest}>
        {options?.map(option => <RadioItem key={option.value} {...option} />)}
      </RadioGroup.Root>
    )
  }
)
