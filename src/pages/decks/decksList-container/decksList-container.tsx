import { DeskList } from '@/components/ui/table/desk-list'

const columns = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    title: 'Created by',
  },
  {
    key: 'actions',
    title: '',
  },
]

type CardType = { cards: number; createdBy: string; id: string; lastUpdated: string; name: string }

type PropsType = {
  card: CardType[]
  deleteHandler: (id: string) => void
  editHandler: (id: string) => void
  playHandler: (id: string) => void
}
const DecksListContainer = ({ card, ...restProps }: PropsType) => {
  return <DeskList card={card} columns={columns} {...restProps} />
}

export default DecksListContainer
