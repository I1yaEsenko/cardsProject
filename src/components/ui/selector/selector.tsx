import { Select } from '@/components/ui/selector/Select/select'
import { SelectItem } from '@/components/ui/selector/SelectItem/selectItem'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
type OptionsProps = {
  title: string
  value: string
}
type SelectProps = {
  defaultValue?: string
  label?: string
  options: OptionsProps[]
  setForm?: (value: string) => void
}
export const Selector = (props: SelectProps) => {
  const onClick = (data: string) => {
    if (props.setForm !== undefined) {
      props.setForm(data)
    }
  }

  const initialValue = props.defaultValue ? props.defaultValue : props.options[0].value

  return (
    <>
      {props.label && <Typography variant={TypographyVariant.body2}>{props.label}</Typography>}

      <Select defaultValue={initialValue} label={props.label} onValueChange={onClick}>
        {props.options.map(el => (
          <SelectItem key={el.value} value={el.value}>
            {el.value}
          </SelectItem>
        ))}
      </Select>
    </>
  )
}
