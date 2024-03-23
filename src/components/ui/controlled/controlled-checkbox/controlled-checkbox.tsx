import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxProps} from "@radix-ui/react-checkbox";

type Props<T extends FieldValues> =
    { label: string }
    & UseControllerProps<T>
    & Omit<CheckboxProps, 'checked' | 'onValueChange' | 'onBlur'>
const ControlledCheckbox = <T extends FieldValues>(
    {
        label,
        control,
        name,
        shouldUnregister,
        disabled,
        defaultValue,
        ...rest
    }: Props<T>) => {
    const {field: {value, onChange, ref, onBlur},} = useController({
        name,
        control,
        shouldUnregister,
        disabled,
        defaultValue


    })
    return (
        <Checkbox checked={value} disabled={disabled} label={label} onBlur={onBlur} onValueChange={onChange}
                  ref={ref} {...rest}/>
    );
};

export default ControlledCheckbox;