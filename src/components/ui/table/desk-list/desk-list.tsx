import { useMemo, useState } from 'react'

import { CardType, ColumnType, SortType } from '@/components/types'
import { NavMenuTd, Table, TableBody, TableHeader, Td, Tr } from '@/components/ui/table'
type DeskListType = {
  card: CardType[] | undefined
  columns: ColumnType[]
  deleteHandler: (id: string) => void
}

export const DeskList = ({ card, columns, deleteHandler }: DeskListType) => {
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
  const deleteOnclick = (id: string) => {
    deleteHandler(id)
  }

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
              <button onClick={() => deleteOnclick(item.id)}>x</button>
              <NavMenuTd />
            </Td>
          </Tr>
        ))}
      </TableBody>
    </Table>
  )
}
