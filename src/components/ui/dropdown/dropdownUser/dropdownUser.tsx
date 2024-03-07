import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import s from '../dropdown.module.scss'
import {TypographyVariant} from "@/components/ui/typography/enum";
import {Typography} from "@/components/ui/typography";
import Img from '../../../../assets/icons/user.png'
import UserIcon from "@/assets/icons/UserIcon";
import SignOutIcon from "@/assets/icons/signOutIcon";
import React from 'react';

const DropdownUser = () => {

    return (
        <React.Fragment>
            <DropdownMenu.Item className={s.dropdownMenuItem}>
                <span className={s.dropdownMenuItemSpan}><img src={Img}/> </span>
                <span>
                        <Typography
                            style={{marginTop: '0', marginBottom: '0',}} variant={TypographyVariant.subtitle2}
                            children={'Ivan'}/>
                            <Typography
                                style={{marginTop: '0', marginBottom: '0', color: '#808080'}}
                                variant={TypographyVariant.caption}
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
        </React.Fragment>
    );
};

export default DropdownUser;