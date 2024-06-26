import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    fullWidth = false,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${className} ${s[variant]} ${fullWidth ? s.fullWidth : ''}`}
      {...rest}
    />
  )
}
