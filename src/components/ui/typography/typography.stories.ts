import { TypographyVariant } from "@/components/ui/typography/enum";
import { ComponentPropsWithoutRef, ElementType } from "react";
import s from "./typography.module.scss";

export type TypographyProps<T extends ElementType = "p"> = {
  as?: T;
  variant?: TypographyVariant;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "p">(props: TypographyProps<T>) => {
  const {
    as: typeof Component = "p" as ElementType,
    className,
    variant = TypographyVariant.body1,
    ...rest
  } = props;

  return (
    <Component className={`${s.button} ${s[variant]}`} {...rest} />
);
};
