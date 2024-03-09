import * as Tabs from '@radix-ui/react-tabs';
import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import s from './tabs.module.scss'

const Switcher = () => {
    return (
        <Tabs.Root className={s.tabsRoot} defaultValue="tab1">
            <Tabs.List className={s.tabsList} aria-label="Manage your account">
                <Tabs.Trigger className={s.tabsTrigger} value="tab1">
                    <Typography className={s.tabsText}  variant={TypographyVariant.body1} children={'Switcher'}/>
                </Tabs.Trigger>
                <Tabs.Trigger className={s.tabsTrigger} value="tab1">
                    <Typography className={s.tabsText}  variant={TypographyVariant.body1} children={'Switcher'}/>
                </Tabs.Trigger>
                <Tabs.Trigger disabled className={s.tabsTrigger} value="tab1">
                    <Typography className={s.tabsText}  variant={TypographyVariant.body1} children={'Switcher'}/>
                </Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
    );
};

export default Switcher;