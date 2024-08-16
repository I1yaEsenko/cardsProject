import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Header from '@/components/ui/header/header'
import { clsx } from 'clsx'

import s from './layout.module.scss'
type Props = ComponentPropsWithoutRef<'div'> & {
  contentMargin?: CSSProperties['marginTop']
}

const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, contentMargin = '36px', ...rest }, ref) => {
    const classes = clsx(s.layout)

    return (
      <div className={className} ref={ref} {...rest}>
        <Header />
        {children}
      </div>
    )
  }
)

export default Layout
