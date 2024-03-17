import s from './signInForm.module.scss'
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";

const SignInForm = () => {
    return (
        <div className={s.wrapper}>
            <Card>
                <div className={s.typographyTitleWrapper}>
                    <Typography className={s.typographyTitle} variant={TypographyVariant.h1}
                                children={'Sign In'}/>
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
                    <Button fullWidth  children={<Typography style={{margin: '6px'}} variant={TypographyVariant.subtitle2} children={'Sign In '}/>}/>
                </div>
                <div className={s.subTitle}>
                    <Typography  variant={TypographyVariant.body2}>
                        Don't have an account?
                    </Typography>
                    <Typography variant={TypographyVariant.link1}>
                        Don't have an account?
                    </Typography>

                </div>
            </Card>
        </div>
    );
};

export default SignInForm;