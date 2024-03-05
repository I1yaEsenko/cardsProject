import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import s from './dropdown.module.scss'
import Outside from "@/assets/icons/outside";
import Player from "@/assets/icons/player";

import {TypographyVariant} from "@/components/ui/typography/enum";
import {Typography} from "@/components/ui/typography";
const Dropdown = () => {
    return (
        <DropdownMenu.Root  open={true}>
            <DropdownMenu.Trigger asChild>
                <button className={s.IconButton } aria-label="Customise options">
                 <Outside/>
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content side={'bottom'} className={s.dropdownMenuContent}>
                    <DropdownMenu.Item  className={s.dropdownMenuItem}>
                        <span className={s.dropdownMenuItemSpan}><Player/> </span><Typography   variant={TypographyVariant.body1}  children={'Learn'}/>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className={s.dropdownSeparator}/>
                    <DropdownMenu.Item  className={s.dropdownMenuItem}>
                        <span className={s.dropdownMenuItemSpan}><Player/> </span><Typography   variant={TypographyVariant.caption}  children={'Edit'}/>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className={s.dropdownSeparator} />
                    <DropdownMenu.Item  className={s.dropdownMenuItem}>
                        <span className={s.dropdownMenuItemSpan}><Player/> </span><Typography   variant={TypographyVariant.caption}  children={'Delete'}/>
                    </DropdownMenu.Item>

                    {/*<DropdownMenu.Item  className={s.dropdownMenuItem}>*/}
                    {/* <Player/> <Typography   variant={TypographyVariant.caption}  children={'fkkfkf djdjjdjdnfnjejfnejefjefjefnjfnejjnfnenf'}/>*/}
                    {/*</DropdownMenu.Item>*/}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Dropdown;