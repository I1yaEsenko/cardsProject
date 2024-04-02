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
            style={{ marginBottom: '0', marginTop: '0' }}
            variant={TypographyVariant.subtitle2}
          >
            Ivan
          </Typography>
          <Typography
            style={{ color: '#808080', marginBottom: '0', marginTop: '0' }}
            variant={TypographyVariant.caption}
          >
            j&johnson@gmail.com
          </Typography>
        </span>
      </DropdownMenu.Item>

      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <UserIcon />{' '}
        </span>
        <Typography
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        >
          My Profile
        </Typography>
      </DropdownMenu.Item>
      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <SignOutIcon />{' '}
        </span>
        <Typography
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        >
          Sign Out
        </Typography>
      </DropdownMenu.Item>
    </>
  )
}

export default DropdownUser
