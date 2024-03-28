import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import ArrowDown from '@/components/icons/ArrowDown'
import * as SelectPrimitive from '@radix-ui/react-select'

import s from '@/components/ui/selector/selector.module.scss'

type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root>
export const Select = React.forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger className={s.trigger} ref={ref}>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className={s.icon}>
            {/*<ChevronDownIcon />*/}
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
