import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

const Switcher = () => {
  return (
    <Tabs.Root className={s.tabsRoot} defaultValue={'tab1'}>
      <Tabs.List aria-label={'Manage your account'} className={s.tabsList}>
        <Tabs.Trigger className={s.tabsTrigger} value={'tab1'}>
          <Typography className={s.tabsText} variant={TypographyVariant.body1}>
            Switcher
          </Typography>
        </Tabs.Trigger>
        <Tabs.Trigger className={s.tabsTrigger} value={'tab1'}>
          <Typography className={s.tabsText} variant={TypographyVariant.body1}>
            Switcher
          </Typography>
        </Tabs.Trigger>
        <Tabs.Trigger className={s.tabsTrigger} disabled value={'tab1'}>
          <Typography className={s.tabsText} variant={TypographyVariant.body1}>
            Switcher
          </Typography>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}

export default Switcher
