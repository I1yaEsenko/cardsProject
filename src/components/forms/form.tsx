import s from './form.module.scss'
import {Card} from "@/components/ui/card";
import {ReactNode} from "react";
type FormProps = {
    children: ReactNode
}
const Form = ({children}:FormProps) => {
    return (
        <div className={s.wrapper}>
            <Card>
                {children}
            </Card>
        </div>
    );
};

export default Form;