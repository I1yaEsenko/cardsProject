import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Radio } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import {
  useGetDecksByIdQuery,
  useGetLearnCardsQuery,
  useSaveRateMutation,
} from '@/services/decks/decks.service'
import { clsx } from 'clsx'

import s from './learn-page.module.scss'
const options = [
  { label: 'Did not know', value: '1' },
  { label: 'Forgot', value: '2' },
  { label: 'A lot of thought', value: '3' },
  { label: 'Confused', value: '4' },
  { label: 'Knew the answer', value: '5' },
]
const LearnPage = () => {
  const { deckId } = useParams()
  const [saveRate] = useSaveRateMutation()
  const { data, isLoading } = useGetLearnCardsQuery({ id: deckId || '' })
  const { data: DecksName } = useGetDecksByIdQuery({ id: deckId || '' })
  const [isOpen, setOpen] = useState<boolean>(false)
  const [rate, setRate] = useState<string>('')

  if (isLoading) {
    return <h1>LOADING</h1>
  }
  const setRateHandler = (value: string) => {
    setRate(value)
    console.log(value)
  }

  const saveRateHandler = () => {
    saveRate({
      data: { cardId: data?.id || '', grade: +rate },
      deckId: deckId || '',
    })
  }

  return (
    <Card className={s.card}>
      <Typography
        className={s.title}
        variant={TypographyVariant.h1}
      >{`Learn "${DecksName?.name}"`}</Typography>

      <div className={s.question}>
        <Typography variant={TypographyVariant.subtitle1}>Question:</Typography>
        <Typography variant={TypographyVariant.body1}>{data?.question}</Typography>
      </div>

      <Button className={clsx(isOpen ? s.button : '')} onClick={() => setOpen(true)}>
        Show Answer
      </Button>
      <div className={clsx(isOpen ? s.answer : s.answerDisabled)}>
        <div className={s.answerTitle}>
          <Typography variant={TypographyVariant.subtitle1}>Answer:</Typography>
          <Typography variant={TypographyVariant.body1}>{data?.answer}</Typography>
        </div>
        <div className={s.rate}>
          <Typography variant={TypographyVariant.subtitle1}>Rate yourself:</Typography>
          <Radio onValueChange={setRateHandler} options={options} />
        </div>
        <Button className={s.answerButton} onClick={saveRateHandler}>
          Show Answer
        </Button>
      </div>
    </Card>
  )
}

export default LearnPage
