import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import { SliderThumb } from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  defaultValue?: number[]
  value?: number[]
} & Omit<ComponentPropsWithoutRef<typeof SliderRadix.Slider>, 'asChild'>

export const Slider = forwardRef<ElementRef<typeof SliderRadix.Slider>, Props>(
  ({ defaultValue, value, ...rest }, ref) => {
    return (
      <SliderRadix.Slider
        className={s.SliderRoot}
        defaultValue={defaultValue}
        value={value}
        {...rest}
        ref={ref}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderThumb className={s.SliderThumb} />
        <SliderThumb className={s.SliderThumb} />
      </SliderRadix.Slider>
    )
  }
)
