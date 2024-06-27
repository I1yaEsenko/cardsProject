import { Link, useParams } from 'react-router-dom'

import ArrowBackOutline from '@/assets/icons/components/ArrowBackOutline'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Rating } from '@/components/ui/rating'
import { Table, TableBody, TableHeader, Td, Tr } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import { useGetCardsByIdQuery, useGetDecksByIdQuery } from '@/services/decks/decks.service'

import s from './deck-page.module.scss'
const columns = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'created',
    title: 'Last Updated',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
]
const DeckPage = () => {
  const { deckId } = useParams()
  const { data: deckData } = useGetDecksByIdQuery({ id: deckId || '' })
  const { data: cardData } = useGetCardsByIdQuery({ id: deckId || '' })

  return (
    <div className={s.wrapper}>
      <Typography as={Link} className={s.link} to={'/'}>
        <ArrowBackOutline /> Back to Decks List
      </Typography>
      <div className={s.header}>
        <div className={s.title}>
          <Typography variant={TypographyVariant.h1}>{deckData?.name}</Typography>
          <Button>Learn to Deck</Button>
        </div>
        <Input placeholder={'Input search'} search />
      </div>

      <Table className={s.table}>
        <TableHeader columns={columns} />
        <TableBody>
          {cardData?.items.map(item => (
            <Tr key={item.id}>
              <Td>{item.question}</Td>
              <Td>{item.answer}</Td>
              <Td>{new Date(item.updated).toLocaleDateString()}</Td>
              <Td>
                <Rating rating={item.grade} />
              </Td>
            </Tr>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DeckPage
