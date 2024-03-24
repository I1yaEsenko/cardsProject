import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import ControlledInput from "@/components/ui/controlled/controlled-input/controlled-input";
import {Card} from "@/components/ui/card";
import s from './sign-in.module.scss'

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
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
        <div>
            <Card>

                    <div className={s.typographyTitleWrapper}>
                        <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>Sign In</Typography>
                    </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.typographyWrapper}>
                        <ControlledInput name={'email'} label={'email'} control={control}/>
                        <ControlledInput name={'password'} label={'password'} control={control}/>
                        <div className={s.tapographyCheckBox}>
                        </div>
                        <div className={s.forgotText}>

                            <Typography style={{margin: 0}} variant={TypographyVariant.body2}> Forgot
                                Password?</Typography>
                        </div>
                    </div>
                    <div className={s.button}>
                        <Button type={'submit'} fullWidth>
                            {/*<Typography style={{margin: '6px'}} variant={TypographyVariant.subtitle2}>*/}
                            {/*    Sign In*/}
                            {/*</Typography>*/}
                            Sign In
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
                </form>
            </Card>
        </div>
    );
};

export default SignIn;