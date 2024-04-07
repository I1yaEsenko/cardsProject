import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
  title?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as: Component = 'div', className, title, ...rest } = props

  return <Component className={clsx(s.card, className)} {...rest} />
}
