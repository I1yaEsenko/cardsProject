import { Select } from '@/components/ui/selector/Select/select'
import { SelectItem } from '@/components/ui/selector/SelectItem/selectItem'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import { clsx } from 'clsx'

import s from './selector.module.scss'

type OptionsProps = {
  title: string
  value: string
}
export type SelectProps = {
  defaultValue?: string
  disabled?: boolean
  label?: string
  large?: boolean
  onValueChange?: (value: ((prevState: string) => string) | string) => void
  options: OptionsProps[]
  setForm?: (value: string) => void
}
export const Selector = ({
  defaultValue,
  disabled,
  label,
  large,
  options,
  setForm,
}: SelectProps) => {
  const onClick = (data: string) => {
    if (setForm !== undefined) {
      setForm(data)
    }
  }

  const initialValue = defaultValue ? defaultValue : options[0].value
  const classes = {
    label: clsx(s.select, disabled === true ? s.disable : ''),
  }

  return (
    <>
      {label && (
        <Typography className={classes.label} variant={TypographyVariant.body2}>
          {label}
        </Typography>
      )}

      <Select
        defaultValue={initialValue}
        disabled={disabled}
        label={label}
        large={large}
        onValueChange={onClick}
      >
        {options.map(el => (
          <SelectItem key={el.value} large={large} value={el.value}>
            {el.value}
          </SelectItem>
        ))}
      </Select>
    </>
  )
}
