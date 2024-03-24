import s from './form.module.scss'
import {Card} from "@/components/ui/card";
import {ReactNode} from "react";
import {FormProvider, useForm} from "react-hook-form";
type FormProps = {
    children: ReactNode
}
const Form = ({children}:FormProps) => {
    const methods = useForm()
    return (
        <FormProvider {...methods} >
        <div className={s.wrapper}>
            <Card>
                {children}
            </Card>
        </div>
        </FormProvider>
    );
};

export default Form;