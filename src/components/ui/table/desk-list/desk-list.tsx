import { CardType, ColumnType } from '@/components/types'
import { Table, TableBody, TableHeader, Td, Tr } from '@/components/ui/table/tabel'

type DeskListType = {
  card: CardType[]
  columns: ColumnType[]
}

export const DeskList = ({ card, columns }: DeskListType) => {
  return (
    <Table>
      <TableHeader columns={columns} />
      <TableBody>
        {card.map(item => (
          <Tr key={item.title}>
            <Td>{item.title}</Td>
            <Td>{item.cardsCount}</Td>
            <Td>{item.updated}</Td>
            <Td>{item.createdBy}</Td>
          </Tr>
        ))}
      </TableBody>
    </Table>
  )
}
