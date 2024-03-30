import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from '@/components/ui/selector/SelectItem/selectItem.module.scss'

type PropsType = {
  large?: boolean
  value: string
} & Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Item>, 'onClick'>
export const SelectItem = React.forwardRef<ElementRef<typeof SelectPrimitive.Item>, PropsType>(
  ({ children, large, ...props }, forwardedRef) => {
    const classes = {
      item: clsx(s.item, large ? s.large : s.small),
    }

    return (
      <SelectPrimitive.Item className={classes.item} {...props} ref={forwardedRef}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
