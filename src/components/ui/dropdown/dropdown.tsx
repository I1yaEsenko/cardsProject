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
        <svg
          fill={'none'}
          height={'10'}
          viewBox={'0 0 16 10'}
          width={'16'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path d={'M0 8L16 8L8 0L0 8Z'} fill={'#333333'} />
          <path d={'M0 10L16 10L8 2L0 10Z'} fill={'#171717'} />
        </svg>
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
>(({ ...rest }, ref) => {
  return <DropdownMenu.Separator {...rest} ref={ref} />
})

export {
  DropdownContent,
  DropdownItem,
  DropdownPortal,
  DropdownRoot,
  DropdownSeparator,
  DropdownTrigger,
}
