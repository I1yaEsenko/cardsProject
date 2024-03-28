import { Select } from '@/components/ui/selector/Select/Select'
import { SelectItem } from '@/components/ui/selector/SelectItem/SelectItem'

type OptionsProps = {
  title: string
  value: string
}
type SelectProps = {
  label: string
  options: OptionsProps[]
  setForm: (value: string) => void
}
export const Selector = (props: SelectProps) => {
  const onClick = (data: string) => {
    props.setForm(data)
  }

  return (
    <Select defaultValue={'2'} onValueChange={onClick}>
      {props.options.map(el => (
        <SelectItem key={el.value} value={el.value}>
          {el.value}
        </SelectItem>
      ))}
    </Select>
  )
}
