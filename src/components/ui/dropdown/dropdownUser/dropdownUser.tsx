import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import s from '../dropdown.module.scss'
import Outside from "@/assets/icons/outside";
import {TypographyVariant} from "@/components/ui/typography/enum";
import {Typography} from "@/components/ui/typography";
import img from '@/assets/icons/dropdown.svg'
import Img from '../../../../assets/icons/user.png'
import UserIcon from "@/assets/icons/UserIcon";
import SignOutIcon from "@/assets/icons/signOutIcon";
// import React from "react";
// type PropsType ={
//     children: React.ReactNode
// }
const DropdownUser = () => {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={s.IconButton} aria-label="Customise options">
                    <Outside/>
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content side={'bottom'} className={s.dropdownMenuContent}>
                    <DropdownMenu.Arrow className={s.dropdownArrow} asChild>
                        <img src={img}/>
                    </DropdownMenu.Arrow>

                    <DropdownMenu.Item className={s.dropdownMenuItem}>
                        <span className={s.dropdownMenuItemSpan}><img src={Img}/> </span>
                        <span>
                        <Typography
                            style={{marginTop: '0', marginBottom: '0' ,} } variant={TypographyVariant.subtitle2}
                            children={'Ivan'}/>
                            <Typography
                            style={{marginTop: '0', marginBottom: '0',color:'#808080'}} variant={TypographyVariant.caption}
                            children={'j&johnson@gmail.com'}/>
                            </span>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className={s.dropdownMenuItem}>
                        <span className={s.dropdownMenuItemSpan}><UserIcon/> </span><Typography
                        style={{marginTop: '0', marginBottom: '0'}} variant={TypographyVariant.caption}
                        children={'My Profile'}/>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className={s.dropdownMenuItem}>

                        <span className={s.dropdownMenuItemSpan}><SignOutIcon/> </span><Typography
                        style={{marginTop: '0', marginBottom: '0'}} variant={TypographyVariant.caption}
                        children={'Sign Out'}/>
                    </DropdownMenu.Item>

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownUser;