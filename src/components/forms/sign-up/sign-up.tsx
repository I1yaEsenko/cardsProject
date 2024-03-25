import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import {Button} from "@/components/ui/button";
import s from './sign-up.module.scss'
import {Card} from "@/components/ui/card";
import ControlledInput from "@/components/ui/controlled/controlled-input/controlled-input";
import {z} from "zod";
import {emailSchema, passwordSchema} from "@/components/utils/zodSchemes/schema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const logOutSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(3)
}).refine(
    (values) => {
        return values.password === values.confirmPassword;
    },
    {
        message: "Passwords must match!",
        path: ["confirmPassword"],
    }
)
type FormType = z.infer<typeof logOutSchema>
const SignUp = () => {
    const {
        control,
        handleSubmit
    } = useForm<FormType>({resolver: zodResolver(logOutSchema)})

    const onSubmit = (data: FormType) => {
        console.log(data)
    }
    return (
        <div className={s.wrapper}>
            <Card>
                <div className={s.typographyTitleWrapper}>
                    <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>
                        Sign Up
                    </Typography>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.typographyWrapper}>
                        <div className={s.email}>
                            <ControlledInput
                                control={control}
                                name={'email'}
                                placeholder={'Email'}
                                label={'Email'}
                            />
                        </div>
                        <div className={s.password}>
                            <ControlledInput
                                control={control}
                                name='password'
                                type={'password'}
                                variant={'password'}
                                placeholder={'Password'}
                                label={'Password'}
                            />

                        </div>
                        <div className={s.confirmPassword}>
                            <ControlledInput
                                name={'confirmPassword'}
                                type={'password'}
                                variant={'password'}
                                placeholder={'Confirm password'}
                                label={'Conform password'}
                                control={control}
                            />
                        </div>
                    </div>
                    <div className={s.button}>
                        <Button fullWidth type='submit'>
                            <Typography style={{margin: '6px'}} variant={TypographyVariant.subtitle2}
                                        children={'Sign Up'}/>
                        </Button>
                    </div>
                </form>
                <div className={s.subTitle}>
                    <Typography className={s.subTitleBody2} variant={TypographyVariant.body2}>
                        Already have an account?
                    </Typography>
                    <Typography className={s.subTitleLink} variant={TypographyVariant.link1}>
                        Sign In
                    </Typography>

                </div>
            </Card>
        </div>
    );
};

export default SignUp;