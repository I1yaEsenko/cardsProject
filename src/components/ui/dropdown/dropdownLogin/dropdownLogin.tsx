import Basket from '@/assets/icons/basket'
import Pin from '@/assets/icons/pin'
import Player from '@/assets/icons/player'
import { DropdownItem } from '@/components/ui/dropdown/dropdown'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'

import s from '@/components/ui/dropdown/dropdown.module.scss'

const DropdownLogin = () => {
  return (
    <>
      <DropdownItem>
        <span className={s.dropdownMenuItemSpan}>
          <Player />{' '}
        </span>
        <Typography
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        >
          Learn
        </Typography>
      </DropdownItem>

      <DropdownItem>
        <span className={s.dropdownMenuItemSpan}>
          <Pin />{' '}
        </span>
        <Typography
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        >
          Edit
        </Typography>
      </DropdownItem>

      <DropdownItem>
        <span className={s.dropdownMenuItemSpan}>
          <Basket />{' '}
        </span>
        <Typography
          style={{ marginBottom: '0', marginTop: '0' }}
          variant={TypographyVariant.caption}
        >
          Delete
        </Typography>
      </DropdownItem>
    </>
  )
}

export default DropdownLogin
