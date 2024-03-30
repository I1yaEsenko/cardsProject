import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

import img from '../../../assets/icons/dropdown.svg'

export type PropsType = {
  children: ReactNode
  iconButton: ReactNode
}
const Dropdown = ({ children, iconButton }: PropsType) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          {iconButton}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.dropdownMenuContent} side={'bottom'}>
          <DropdownMenu.Arrow asChild className={s.dropdownArrow}>
            <img alt={'userIcon'} src={img} />
          </DropdownMenu.Arrow>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default Dropdown
