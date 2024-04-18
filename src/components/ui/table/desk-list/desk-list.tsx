import { useMemo, useState } from 'react'

import Pen from '@/assets/icons/pen.svg'
import Player from '@/assets/icons/player.svg'
import Tresh from '@/assets/icons/tresh.svg'
import { CardType, ColumnType, SortType } from '@/components/types'
import { Table, TableBody, TableHeader, Td, Tr } from '@/components/ui/table/tabel'

import s from './desk-list.module.scss'
type DeskListType = {
  card: CardType[]
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
        {card.map(item => (
          <Tr key={item.title}>
            <Td>{item.title}</Td>
            <Td>{item.cardsCount}</Td>
            <Td>{item.updated}</Td>
            <Td>{item.createdBy}</Td>
            <Td>
              <span className={s.span}>
                {/*Player */}
                <img src={Player} />
                <img src={Pen} />
                <img src={Tresh} />
              </span>
            </Td>
          </Tr>
        ))}
      </TableBody>
    </Table>
  )
}
