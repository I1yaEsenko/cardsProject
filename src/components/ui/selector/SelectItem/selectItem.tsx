import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'

import s from '@/components/ui/selector/selector.module.scss'

type PropsType = {
  value: string
} & Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Item>, 'onClick'>
export const SelectItem = React.forwardRef<ElementRef<typeof SelectPrimitive.Item>, PropsType>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item className={s.item} {...props} ref={forwardedRef}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
