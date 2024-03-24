import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import ControlledInput from "@/components/ui/controlled/controlled-input/controlled-input";
import {Card} from "@/components/ui/card";
import s from './sign-in.module.scss'
import ControlledCheckbox from "@/components/ui/controlled/controlled-checkbox/controlled-checkbox";
import {emailSchema, passwordSchema} from "@/components/utils/zodSchemes/schema";

const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    rememberMe: z.boolean()
})
type FormValues = z.infer<typeof loginSchema>
const SignIn = () => {
    const {
        control,
        handleSubmit,
    } = useForm<FormValues>({resolver: zodResolver(loginSchema)})
    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    return (
        <div className={s.wrapper}>
            <Card>
                <div className={s.typographyTitleWrapper}>
                    <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>Sign In</Typography>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.typographyWrapper}>
                        <div className={s.email}>
                            <ControlledInput name={'email'} label={'Email'} control={control}/>
                        </div>
                        <div className={s.password}>
                            <ControlledInput name={'password'} type={'password'} variant='password' label={'Password'}
                                             control={control}/>
                        </div>
                        <div className={s.tapographyCheckBox}>
                            <ControlledCheckbox label={'Remember me'} name={'rememberMe'} control={control}/>
                        </div>
                        <div className={s.forgotText}>

                            <Typography variant={TypographyVariant.body2}>
                                Forgot Password?
                            </Typography>


                        </div>
                    </div>
                    <div className={s.button}>
                        <Button type='submit' fullWidth>
                            <Typography variant={TypographyVariant.subtitle2}>
                                Sign In
                            </Typography>
                        </Button>
                    </div>
                </form>
                <div className={s.subTitle}>
                    <Typography className={s.subTitleBody2} variant={TypographyVariant.body2}>
                        Don't have an account?
                    </Typography>
                    <Typography className={s.subTitleLink} variant={TypographyVariant.link1}>
                        Sign Up
                    </Typography>
                </div>
            </Card>
        </div>
    );
};
//TODO: спросить насчет  Typography и их margin можно ли их убрать в css ли нет

export default SignIn;