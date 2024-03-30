import { Control, FieldValues, Path, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/input'

type Props<T extends FieldValues> = {
  control?: Control<T>
  label?: string
  name: Path<T>
} & Omit<InputProps, 'label' | 'onChange' | 'value'>
export const ControlledInput = <T extends FieldValues>({ control, label, ...rest }: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control: control,
    name: rest.name,
  })

  return <Input {...rest} {...field} error={!!error} errorMessage={error?.message} label={label} />
}
