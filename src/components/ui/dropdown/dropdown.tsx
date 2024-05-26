import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'
export type Props = {
  children: ReactNode
  iconButton: ReactNode
}
export const Dropdown = ({ children, iconButton }: Props) => {
  return (
    <DropdownRoot open>
      <DropdownTrigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          {iconButton}
        </button>
      </DropdownTrigger>
      <DropdownPortal>
        <DropdownContent>
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
          {children}
        </DropdownContent>
      </DropdownPortal>
    </DropdownRoot>
  )
}

export const DropdownRoot = DropdownMenu.Root
export const DropdownTrigger = DropdownMenu.Trigger
export const DropdownPortal = DropdownMenu.Portal
export const DropdownContent = forwardRef<
  ElementRef<typeof DropdownMenu.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Content>
>(({ className, side = 'bottom', ...rest }, ref) => {
  return (
    <DropdownMenu.Content
      className={clsx(s.dropdownMenuContent, className)}
      ref={ref}
      side={side}
      {...rest}
    />
  )
})
export const DropdownItem = forwardRef<
  ElementRef<typeof DropdownMenu.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Item>
>(({ className, ...rest }, ref) => {
  return <DropdownMenu.Item className={clsx(s.dropdownMenuItem, className)} {...rest} ref={ref} />
})
