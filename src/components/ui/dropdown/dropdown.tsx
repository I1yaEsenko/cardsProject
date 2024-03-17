import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import s from './dropdown.module.scss'

import img from '../../../assets/icons/dropdown.svg'

import React from "react";

export type PropsType = {
    children: React.ReactElement
    iconButton: React.ReactElement
}
const Dropdown = ({children,iconButton}: PropsType) => {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={s.IconButton} aria-label="Customise options">
                    {iconButton}
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content side={'bottom'} className={s.dropdownMenuContent}>
                    <DropdownMenu.Arrow className={s.dropdownArrow} asChild>
                        <img src={img} alt={'userIcon'}/>
                    </DropdownMenu.Arrow>
                    {children}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Dropdown;