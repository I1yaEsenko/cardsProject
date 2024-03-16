import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import { SliderThumb } from '@radix-ui/react-slider'
import cn from 'classnames'

import s from './slider.module.scss'

type Props = {
  defaultValue?: number[]
  value?: number[]
} & Omit<ComponentPropsWithoutRef<typeof SliderRadix.Slider>, 'asChild'>

export const Slider = forwardRef<ElementRef<typeof SliderRadix.Slider>, Props>(
  ({ className, max, onValueChange, value, ...rest }, ref) => {
    useEffect(() => {
      if (value?.[1] === undefined || value?.[1] === null) {
        onValueChange?.([value?.[0] ?? 0, max ?? 0])
      }
    }, [max, value, onValueChange])

    return (
      <div className={s.wrapper}>
        <span className={s.valueDisplay}>{value?.[0]}</span>
        <SliderRadix.Root
          className={cn(s.SliderRoot, className)}
          onValueChange={onValueChange}
          value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
          {...rest}
          max={max}
          ref={ref}
        >
          <SliderRadix.Track className={s.SliderTrack}>
            <SliderRadix.Range className={s.SliderRange} />
          </SliderRadix.Track>
          <SliderThumb className={s.SliderThumb} />
          <SliderThumb className={s.SliderThumb} />
        </SliderRadix.Root>
        <span className={s.valueDisplay}>{value?.[1]}</span>
      </div>
    )
  }
)
