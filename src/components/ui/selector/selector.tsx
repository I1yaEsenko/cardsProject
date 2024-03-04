import * as Select from '@radix-ui/react-select';
import s from './selector.module.scss'
import ArrowDown from "@/components/icons/ArrowDown";
import {useState} from "react";

const Selector = () => {
    const [value, setValue] = useState('')
    const handleChange = (event: string) => {
        setValue(event);
    };
    console.log(value)
    return (
        <Select.Root value={value} onValueChange={handleChange} >
            <Select.Trigger className={s.selectorTrigger}>
                <Select.Value className={s.selectorValue}/>
                <Select.Icon className={s.iconWrapper}>
                    <ArrowDown className={s.arrowIcon} height={'16'} width={'16'}/>
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className={s.selectorContent} position="popper">
                    <Select.Item className={s.selectorContentItem}   value="apple">Apple</Select.Item>
                    <Select.Item className={s.selectorContentItem} value="orange">Orange</Select.Item>
                </Select.Content>
            </Select.Portal>
            {/* </Select.Portal>*/}

        </Select.Root>

    );
};

export default Selector;