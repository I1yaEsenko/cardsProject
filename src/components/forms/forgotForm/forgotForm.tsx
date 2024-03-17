import {Input} from "@/components/ui/input";
import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import s from './forgotForm.module.scss'
import {Button} from "@/components/ui/button";



const ForgotForm = () => {
    return (
      <>
          <div className={s.typographyTitleWrapper}>
                    <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>Forgot your
                        password?</Typography>
                </div>
                <div className={s.typographyEmailWrapper}>
                    <Input style={{color: '#fff'}} label={'Email'}/>

                    <Typography className={s.emailTypography} variant={TypographyVariant.body2}>
                        Enter your email address and we will send you further instructions
                    </Typography>
                </div>
                <div className={s.typographyBottom}>
                    <Button fullWidth children={'Send Instructions'}/>
                    <Typography className={s.typographyBottomBody2} variant={TypographyVariant.body2}
                                children={'Did you remember your password?'}/>
                    <Typography className={s.link} variant={TypographyVariant.link1} children={'Try logging in'}/>
                </div>
      </>
    );
};

export default ForgotForm;