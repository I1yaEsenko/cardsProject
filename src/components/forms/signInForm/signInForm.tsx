import s from './signInForm.module.scss'
import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";


const SignInForm = () => {
    return (
        <>
            <div className={s.typographyTitleWrapper}>
                <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>Sign In</Typography>
            </div>
            <div className={s.typographyWrapper}>
                <Input style={{color: '#fff', marginBottom: '24px'}} label={'Email'}/>
                <Input style={{color: '#fff'}} type={'password'} variant={'password'} label={'Password'}/>
                <div className={s.tapographyCheckBox}>
                    <Checkbox label={'Remember me'}/>
                </div>
                <div className={s.forgotText}>
                    <Typography style={{margin: 0}} variant={TypographyVariant.body2}> Forgot Password?</Typography>
                </div>
            </div>
            <div className={s.button}>
                <Button fullWidth>
                    <Typography style={{margin: '6px'}} variant={TypographyVariant.subtitle2}>
                        Sign In
                    </Typography>
                </Button>
            </div>
            <div className={s.subTitle}>
                <Typography className={s.subTitleBody2} variant={TypographyVariant.body2}>
                    Don't have an account?
                </Typography>
                <Typography className={s.subTitleLink} variant={TypographyVariant.link1}>
                    Sign Up
                </Typography>

            </div>
        </>

    );
};

export default SignInForm;