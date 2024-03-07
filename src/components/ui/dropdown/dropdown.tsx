import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import s from './dropdown.module.scss'
import Outside from "@/assets/icons/outside";
import Player from "@/assets/icons/player";
import {TypographyVariant} from "@/components/ui/typography/enum";
import {Typography} from "@/components/ui/typography";
import Pin from "@/assets/icons/pin";
import Basket from "@/assets/icons/basket";
import img from '../../../assets/icons/dropdown.svg'

// import React from "react";
// type PropsType ={
//     children: React.ReactNode
// }
const Dropdown = () => {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
            <button   className={s.IconButton}  aria-label="Customise options">
                <Outside/>
            </button>
        </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                 <DropdownMenu.Content side={'bottom'}  className={s.dropdownMenuContent}>
                    <DropdownMenu.Arrow  className={s.dropdownArrow} asChild >
                        <img src={img} alt={'userIcon'}/>
                    </DropdownMenu.Arrow>

                    <DropdownMenu.Item className={s.dropdownMenuItem}>
                        <span className={s.dropdownMenuItemSpan}><Player/> </span><Typography
                        style={{marginTop: '0', marginBottom: '0'}} variant={TypographyVariant.caption}
                        children={'Learn'}/>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className={s.dropdownMenuItem}>
                        <span className={s.dropdownMenuItemSpan}><Pin/> </span><Typography
                        style={{marginTop: '0', marginBottom: '0'}} variant={TypographyVariant.caption}
                        children={'Edit'}/>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className={s.dropdownMenuItem}>

                        <span className={s.dropdownMenuItemSpan}><Basket/> </span><Typography
                        style={{marginTop: '0', marginBottom: '0'}} variant={TypographyVariant.caption}
                        children={'Delete'}/>
                    </DropdownMenu.Item>

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Dropdown;