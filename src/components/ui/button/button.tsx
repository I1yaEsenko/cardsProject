import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
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
    <button   className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''}`} {...rest} />
  )
}
