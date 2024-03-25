import {Typography} from "@/components/ui/typography";
import {TypographyVariant} from "@/components/ui/typography/enum";
import s from './forgot-form.module.scss'
import {Button} from "@/components/ui/button";
import {z} from 'zod'
import {emailSchema,} from "@/components/utils/zodSchemes/schema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import ControlledInput from "@/components/ui/controlled/controlled-input/controlled-input";
import {Card} from "@/components/ui/card";


const forgotSchema = z.object({
    email: emailSchema
})

type FormType = z.infer<typeof forgotSchema>
const ForgotForm = () => {
    const {
        control,
        handleSubmit
    } = useForm<FormType>({resolver: zodResolver(forgotSchema)})

    const onSubmit = (data: FormType) => {
        console.log(data)
    }
    return (
        <div className={s.wrapper}>
            <Card>
                <div className={s.typographyTitleWrapper}>
                    <Typography className={s.typographyTitle} variant={TypographyVariant.h1}>Forgot your
                        password?</Typography>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.typographyEmailWrapper}>

                        {/*<Input style={{color: '#fff'}} label={'Email'}/>*/}
                        <ControlledInput name={'email'} control={control} label={'Email'}/>

                        <Typography className={s.emailTypography} variant={TypographyVariant.body2}>
                            Enter your email address and we will send you further instructions
                        </Typography>
                    </div>
                    <div className={s.typographyBottom}>
                        <Button type={'submit'} fullWidth children={'Send Instructions'}/>

                        <Typography className={s.typographyBottomBody2} variant={TypographyVariant.body2}
                                    children={'Did you remember your password?'}/>
                        <Typography className={s.link} variant={TypographyVariant.link1} children={'Try logging in'}/>

                    </div>
                </form>
            </Card>
        </div>
    );
};

export default ForgotForm;