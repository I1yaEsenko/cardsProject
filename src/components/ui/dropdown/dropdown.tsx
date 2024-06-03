import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'
export type Props = {
  children: ReactNode
  iconButton: ReactNode
}

const DropdownRoot = DropdownMenu.Root
const DropdownTrigger = forwardRef<
  ElementRef<typeof DropdownMenu.Trigger>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Trigger>
>(({ className, ...rest }, ref) => {
  return <DropdownMenu.Trigger className={clsx(s.trigger, className)} {...rest} ref={ref} />
})
const DropdownPortal = DropdownMenu.Portal
const DropdownContent = forwardRef<
  ElementRef<typeof DropdownMenu.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Content>
>(({ children, className, side = 'bottom', ...rest }, ref) => {
  return (
    <DropdownMenu.Content className={clsx(s.content, className)} ref={ref} side={side} {...rest}>
      <DropdownMenu.Arrow asChild className={s.dropdownArrow}>
        {/*<img alt={'userIcon'} src={img} />*/}
        <div className={s.arrow}></div>
      </DropdownMenu.Arrow>
      <div className={s.contentItems}>{children}</div>
    </DropdownMenu.Content>
  )
})
const DropdownItem = forwardRef<
  ElementRef<typeof DropdownMenu.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Item>
>(({ className, ...rest }, ref) => {
  return <DropdownMenu.Item className={clsx(s.item, className)} {...rest} ref={ref} />
})
const DropdownSeparator = forwardRef<
  ElementRef<typeof DropdownMenu.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Separator>
>(({ className, ...rest }, ref) => {
  return <DropdownMenu.Separator className={clsx(s.separator, className)} {...rest} ref={ref} />
})

export {
  DropdownContent,
  DropdownItem,
  DropdownPortal,
  DropdownRoot,
  DropdownSeparator,
  DropdownTrigger,
}
