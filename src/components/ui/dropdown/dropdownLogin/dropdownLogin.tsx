import React from 'react'

import Basket from '@/assets/icons/basket'
import Pin from '@/assets/icons/pin'
import Player from '@/assets/icons/player'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from '@/components/ui/dropdown/dropdown.module.scss'

const DropdownLogin = () => {
  return (
    <>
      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <Player />{' '}
        </span>
        <Typography
          children={'Learn'}
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        />
      </DropdownMenu.Item>

      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <Pin />{' '}
        </span>
        <Typography
          children={'Edit'}
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        />
      </DropdownMenu.Item>

      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <Basket />{' '}
        </span>
        <Typography
          children={'Delete'}
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        />
      </DropdownMenu.Item>
    </>
  )
}

export default DropdownLogin
