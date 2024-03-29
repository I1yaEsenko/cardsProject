import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import ArrowDown from '@/components/icons/ArrowDown'
import * as SelectPrimitive from '@radix-ui/react-select'

import s from '@/components/ui/selector/selector.module.scss'

type SelectProps = {
  defaultValue: string
  label?: string
  onValueChange: (data: string) => void
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>
export const Select = React.forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  ({ children, label, ...props }, ref) => {
    const classNames = {
      content: s.content,
      icon: s.icon,
      trigger: s.trigger,
    }

    return (
      <SelectPrimitive.Root {...props}>
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
