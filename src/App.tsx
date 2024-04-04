import React from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
// import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons'

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuContent = React.forwardRef<any, any>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content {...props} ref={forwardedRef}>
          {children}
          <DropdownMenuPrimitive.Arrow />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    )
  }
)

export const DropdownMenuLabel = DropdownMenuPrimitive.Label
export const DropdownMenuItem = DropdownMenuPrimitive.Item
export const DropdownMenuGroup = DropdownMenuPrimitive.Group

export const DropdownMenuCheckboxItem = React.forwardRef<any, any>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
        {children}
        <DropdownMenuPrimitive.ItemIndicator>
          {props.checked === 'indeterminate' && ''}
          {props.checked === true && ' '}
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.CheckboxItem>
    )
  }
)

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuRadioItem = React.forwardRef<any, any>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
        {children}
        <DropdownMenuPrimitive.ItemIndicator>
          {/*<CheckIcon />*/}
          ++
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.RadioItem>
    )
  }
)

export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator

export function App() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>DropdownMenu trigger</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuLabel>Label</DropdownMenuLabel>
        <DropdownMenuGroup>Group</DropdownMenuGroup>
        <DropdownMenuCheckboxItem>CheckboxItem</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator>Separator</DropdownMenuSeparator>
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem>RadioItem</DropdownMenuRadioItem>
          <DropdownMenuRadioItem>RadioItem</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
