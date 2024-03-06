import { ComponentPropsWithoutRef, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

export type Option = {
  label: string
  value: string
}

export type RadioProps = {
  errorMessage?: string
  options?: Option[]
} & ComponentPropsWithoutRef<'input'>

export const Radio = (props: RadioProps) => {
  const { errorMessage, options, ...rest } = props
  const [selectedOption, setSelectedOption] = useState<string>('')

  const makeLabelsUnique = (array: Option[]) => {
    const uniqueLabels = new Set<string>()

    for (const obj of array) {
      let count = 1
      let uniqueLabel = obj.value

      while (uniqueLabels.has(uniqueLabel) || uniqueLabel === undefined) {
        uniqueLabel = `${obj.value} ${count}`
        count++
      }

      obj.value = uniqueLabel
      uniqueLabels.add(uniqueLabel)
    }

    return array
  }

  let newArrayOptions = []

  if (options) {
    newArrayOptions = makeLabelsUnique(options)
  } else {
    return 'Array is undefined'
  }

  // {...rest}
  return (
    <>
      <RadioGroup.Root className={s.root} onValueChange={setSelectedOption} {...rest}>
        {newArrayOptions?.map(item => (
          <div className={s.container} key={item.value}>
            <RadioGroup.Item
              className={s.radio}
              disabled={false}
              id={item.value}
              value={item.value}
            >
              <RadioGroup.Indicator className={s.indicator} />
            </RadioGroup.Item>
            <Typography as={'label'} className={s.label} htmlFor={item.value}>
              {item.label}
            </Typography>
          </div>
        ))}
      </RadioGroup.Root>
      {errorMessage && (
        <Typography as={'span'} className={s.error} variant={TypographyVariant.body2}>
          {errorMessage}
        </Typography>
      )}
      <Typography as={'div'} variant={TypographyVariant.body1}>
        Selected value: {selectedOption}
      </Typography>
    </>
  )
}
