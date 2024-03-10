import React from 'react'

import UserIcon from '@/assets/icons/UserIcon'
import SignOutIcon from '@/assets/icons/signOutIcon'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from '../dropdown.module.scss'

import Img from '../../../../assets/icons/user.png'

const DropdownUser = () => {
  return (
    <>
      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <img src={Img} />{' '}
        </span>
        <span>
          <Typography
            children={'Ivan'}
            style={{ marginBottom: '0', marginTop: '0' }}
            variant={TypographyVariant.subtitle2}
          />
          <Typography
            children={'j&johnson@gmail.com'}
            style={{ color: '#808080', marginBottom: '0', marginTop: '0' }}
            variant={TypographyVariant.caption}
          />
        </span>
      </DropdownMenu.Item>

      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <UserIcon />{' '}
        </span>
        <Typography
          children={'My Profile'}
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        />
      </DropdownMenu.Item>

      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <SignOutIcon />{' '}
        </span>
        <Typography
          children={'Sign Out'}
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        />
      </DropdownMenu.Item>
    </>
  )
}

export default DropdownUser
