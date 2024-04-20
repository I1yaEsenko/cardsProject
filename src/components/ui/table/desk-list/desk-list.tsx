import { useMemo, useState } from 'react'

import { CardType, ColumnType, SortType } from '@/components/types'
import { NavMenuTd, Table, TableBody, TableHeader, Td, Tr } from '@/components/ui/table'
type DeskListType = {
  card: CardType[] | undefined
  columns: ColumnType[]
}

export const DeskList = ({ card, columns }: DeskListType) => {
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
        {card?.map(item => (
          <Tr key={item.id}>
            <Td>{item.name}</Td>
            <Td>{item.cards}</Td>
            <Td>{item.lastUpdated}</Td>
            <Td>{item.createdBy}</Td>
            <Td>
              <NavMenuTd />
            </Td>
          </Tr>
        ))}
      </TableBody>
    </Table>
  )
}
