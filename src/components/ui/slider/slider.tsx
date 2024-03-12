import * as SliderRadix from '@radix-ui/react-slider';
import { SliderThumb } from "@radix-ui/react-slider";
import { ElementRef, forwardRef } from "react";
import s from './slider.module.scss'

type Props = {
  value: number[],
  defaultValue: number[]
}

export const Slider = forwardRef<ElementRef<typeof SliderRadix.Slider>, Props>((props: Props, forwardedRef) => {
  const value = props.value || props.defaultValue;

  return (
    <SliderRadix.Slider className={s.SliderRoot} {...props} ref={forwardedRef}>
      <SliderRadix.Track className={s.SliderTrack}>
        <SliderRadix.Range className={s.SliderRange} />
      </SliderRadix.Track>
      {value?.map((_, i) => (
        <SliderThumb className={s.SliderThumb} key={i} />
      ))}
    </SliderRadix.Slider>
  );
});