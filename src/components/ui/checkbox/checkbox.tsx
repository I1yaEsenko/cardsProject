import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'

import {Check} from '@/assets'
import {Typography} from '@/components/ui/typography'
import {TypographyVariant} from '@/components/ui/typography/enum'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import cn from 'classnames'

import s from './checkbox.module.scss'

type CheckBox = {
    label?: string,
    onValueChange?: (checked: boolean) => void
    checked?: boolean
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckBox>(
    (
        {
            className,
            checked,
            disabled,
            onValueChange,
            label,
            ...rest
        }, ref) => {
        return (
            <Typography
                as={'label'}
                className={cn(s.label, {[s.disabled]: disabled}, className)}
                variant={TypographyVariant.body2}
            >
                <CheckboxRadix.Root onCheckedChange={onValueChange} checked={checked} className={s.checkboxRoot}
                                    disabled={disabled} {...rest} ref={ref}>
                    <CheckboxRadix.Indicator className={s.checkboxIndicator}>
                        <Check/>
                    </CheckboxRadix.Indicator>
                </CheckboxRadix.Root>
                {label}
            </Typography>
        )
    }
)
