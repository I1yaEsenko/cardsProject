import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'

type Props<T extends FieldValues> = { label: string } & UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'onBlur' | 'onValueChange'>
export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  label,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <Checkbox
      checked={value}
      disabled={disabled}
      label={label}
      name={name}
      onBlur={onBlur}
      onValueChange={onChange}
      ref={ref}
      {...rest}
    />
  )
}
