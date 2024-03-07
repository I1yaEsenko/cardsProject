import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from "@/components/ui/dropdown/dropdown.module.scss";
import Player from "@/assets/icons/player";
import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import Pin from "@/assets/icons/pin";
import Basket from "@/assets/icons/basket";


const DropdownLogin = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default DropdownLogin;