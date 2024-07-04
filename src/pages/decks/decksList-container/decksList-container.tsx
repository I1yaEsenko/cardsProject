import { DesksList } from '@/components/ui/table/desks-list'

type CardType = { cards: number; createdBy: string; id: string; lastUpdated: string; name: string }

type PropsType = {
  card: CardType[]
  deleteHandler: (id: string) => void
  editHandler: (id: string) => void
  playHandler: (id: string) => void
}
const DecksListContainer = ({ card, ...restProps }: PropsType) => {
  return <DesksList card={card} {...restProps} />
}

export default DecksListContainer
