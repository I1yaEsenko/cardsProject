import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
  title?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as: Component = 'div', children, title, ...rest } = props

  return (
    <div className={s.card}>
      <Component className={s.content} {...rest}>
        {children}
      </Component>
    </div>
  )
}
