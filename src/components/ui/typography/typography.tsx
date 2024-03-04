import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyVariant } from '@/components/ui/typography/enum'
import cn from 'classnames'

import s from '@/components/ui/typography/typography.module.scss'

type TypographyOwnProps<T extends ElementType = ElementType> = {
  as?: T
  className?: string
  variant?: TypographyVariant
}

type TypographyProps<T extends ElementType> = TypographyOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyOwnProps>

const defaultElement = 'p'

export const Typography = <T extends ElementType = typeof defaultElement>(
  props: TypographyProps<T>
) => {
  const { as, children, className, variant = TypographyVariant.body1, ...rest } = props
  const Component: ElementType = as || 'p'
  const classes = cn(s.typography, s[variant], className)

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}
