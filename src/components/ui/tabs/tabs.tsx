import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

export const Switcher = () => {
  return (
    <TabsPrimitive.Root className={s.tabsRoot} defaultValue={'tab1'}>
      <TabsPrimitive.List aria-label={'Manage your account'} className={s.tabsList}>
        <TabsPrimitive.Trigger className={s.tabsTrigger} value={'tab1'}>
          <Typography className={s.tabsText} variant={TypographyVariant.body1}>
            My Cards
          </Typography>
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger className={s.tabsTrigger} value={'tab2'}>
          <Typography className={s.tabsText} variant={TypographyVariant.body1}>
            All Cards
          </Typography>
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
}
const Tabs = TabsPrimitive.Root

const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List className={clsx(s.list, className)} ref={ref} {...props} />
))

// TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger className={clsx(s.trigger, className)} ref={ref} {...props} />
))

// TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content className={clsx(s.content, className)} ref={ref} {...props} />
))

// TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
