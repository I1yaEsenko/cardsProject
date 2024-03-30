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
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        >
          Learn
        </Typography>
      </DropdownMenu.Item>

      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <Pin />{' '}
        </span>
        <Typography
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        >
          Edit
        </Typography>
      </DropdownMenu.Item>

      <DropdownMenu.Item className={s.dropdownMenuItem}>
        <span className={s.dropdownMenuItemSpan}>
          <Basket />{' '}
        </span>
        <Typography
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        >
          Delete
        </Typography>
      </DropdownMenu.Item>
    </>
  )
}

export default DropdownLogin
