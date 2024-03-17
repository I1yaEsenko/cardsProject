import s from "@/components/forms/signInForm/signInForm.module.scss";
import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";


const SignUpForm = () => {
    return (
        <>

            <div className={s.typographyTitleWrapper}>
                <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>
                    Sign Up
                </Typography>
            </div>
            <div className={s.typographyWrapper}>
                <Input style={{color: '#fff', marginBottom: '24px',}} placeholder={'Email'} label={'Email'}/>

                <div style={{marginBottom: '24px'}}>
                    <Input style={{color: '#fff',}} type={'password'} variant={'password'} placeholder={'Password'}
                           label={'Password'}/>
                </div>
                <Input style={{color: '#fff'}} type={'password'} variant={'password'}
                       placeholder={'Confirm password'} label={'Conform password'}/>
            </div>
            <div className={s.button}>
                <Button fullWidth>
                    <Typography style={{margin: '6px'}} variant={TypographyVariant.subtitle2}
                                children={'Sign Up'}/>
                </Button>
            </div>
            <div className={s.subTitle}>
                <Typography className={s.subTitleBody2} variant={TypographyVariant.body2}>
                    Already have an account?
                </Typography>
                <Typography className={s.subTitleLink} variant={TypographyVariant.link1}>
                    Sign In
                </Typography>

            </div>
        </>
    );
};

export default SignUpForm;