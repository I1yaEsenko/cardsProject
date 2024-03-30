import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import ArrowDown from '@/components/icons/ArrowDown'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from '@/components/ui/selector/Select/select.module.scss'

type SelectProps = {
  defaultValue: string
  disabled?: boolean
  label?: string
  large?: boolean
  onValueChange: (data: string) => void
} & Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, 'disabled'>
export const Select = React.forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  ({ children, disabled, label, large, ...props }, ref) => {
    const classNames = {
      content: clsx(s.content, s.disabled),
      icon: s.icon,
      trigger: clsx(s.trigger, large ? s.large : s.small, disabled ? s.disabled : ''),
    }

    return (
      <SelectPrimitive.Root disabled={disabled} {...props}>
        <SelectPrimitive.Trigger className={classNames.trigger} ref={ref}>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className={classNames.icon}>
            <ArrowDown height={'16'} width={'16'} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className={s.content} position={'popper'}>
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  }
)
