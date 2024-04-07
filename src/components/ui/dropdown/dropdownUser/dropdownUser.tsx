import UserIcon from '@/assets/icons/UserIcon'
import SignOutIcon from '@/assets/icons/signOutIcon'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

// import s from '@/dropdown.module.scss'
// import * as s from 'src/components/ui/dropdown/dropdownUser/dropdownUser.module.scss'
import s from './dropdownUser.module.scss'

import Img from '../../../../assets/icons/user.png'

const DropdownUser = () => {
  return (
    <>
      <DropdownMenu.Item className={s.dropdownMenuTop}>
        <img alt={'item span'} className={s.dropdownMenuItemSpan} src={Img} />
        <span>
          <Typography className={s.user} variant={TypographyVariant.subtitle2}>
            Ivan
          </Typography>
          <Typography className={s.user} variant={TypographyVariant.caption}>
            j&johnson@gmail.com
          </Typography>
        </span>
      </DropdownMenu.Item>
      <DropdownMenu.Separator className={s.dropdownSeparator} />
      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <UserIcon />
        </span>
        <Typography variant={TypographyVariant.caption}>My Profile</Typography>
      </DropdownMenu.Item>
      <DropdownMenu.Separator className={s.dropdownSeparator} />
      <DropdownMenu.Item className={s.dropdownMenuItemBottom}>
        <span className={s.dropdownMenuItemSpan}>
          <SignOutIcon />{' '}
        </span>
        <Typography variant={TypographyVariant.caption}>Sign Out</Typography>
      </DropdownMenu.Item>
    </>
  )
}

export default DropdownUser
