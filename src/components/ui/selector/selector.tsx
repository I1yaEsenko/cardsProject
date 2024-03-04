import * as Select from '@radix-ui/react-select';
import s from './selector.module.scss'
import ArrowDown from "@/components/icons/ArrowDown";

const Selector = () => {
    return (
        <Select.Root>
            <Select.Trigger id={"country"} className={s.selectorTrigger}>
                <Select.Value className={s.selectorValue} placeholder={'Select-Box'}/>
                <Select.Icon className={s.iconWrapper}>
                    <ArrowDown className={s.arrowIcon} height={'16'} width={'16'}/>
                </Select.Icon>
            </Select.Trigger>
            <Select.Content  position="popper">
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
            </Select.Content>
            {/* </Select.Portal>*/}

        </Select.Root>

    );
};

export default Selector;