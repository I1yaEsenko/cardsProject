import {Control, FieldValues, Path, useController} from "react-hook-form";
import {Input, InputProps} from "@/components/ui/input";

type Props<T extends FieldValues> =
    {
        control: Control<T>,
        name: Path<T>,
        label: string
    } & Omit<InputProps,'onChange'| 'value'| 'label'>
const ControlledInput = <T extends FieldValues>({control,label, ...rest}: Props<T>) => {
    const {field, fieldState: {error}} = useController({
        control: control,
        name: rest.name
    })
    return (
        <Input {...rest} {...field} error={!!error} label={label} errorMessage={error?.message}/>
    );
};

export default ControlledInput;