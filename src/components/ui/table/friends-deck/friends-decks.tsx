import { useMemo, useState } from 'react'

import { ColumnType, SortType } from '@/components/types'
import { FriendsCards } from '@/components/types/types'
import { Table, TableBody, TableHeader, Td, Tr } from '@/components/ui/table/tabel'

type DeskListType = {
  card: FriendsCards[]
  columns: ColumnType[]
}

export const FriendsDecks = ({ card, columns }: DeskListType) => {
  const [sort, setSort] = useState<SortType>(null)
  const sortedString = useMemo(() => {
    if (!sort) {
      return null
    }
    if (sort) {
      return `${sort.key}-${sort.direction}`
    }
  }, [sort])

  console.log(sortedString)
  console.log(sort)

  return (
    <Table>
      <TableHeader columns={columns} onSort={setSort} sort={sort} />
      <TableBody>
        {card.map(item => (
          <Tr key={item.question}>
            <Td>{item.question}</Td>
            <Td>{item.answer}</Td>
            <Td>{item.updated}</Td>
            <Td>5</Td>
          </Tr>
        ))}
      </TableBody>
    </Table>
  )
}
