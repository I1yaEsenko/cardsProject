import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import Pen from '@/assets/icons/pen.svg'
import Player from '@/assets/icons/player.svg'
import Trash from '@/assets/icons/trash.svg'
import { CardType, ColumnType, SortType } from '@/components/types'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableHeader, Td, Tr } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'

import s from '@/components/ui/table/table.module.scss'

type DeskListType = {
  card: CardType[] | undefined
  columns: ColumnType[]
  deleteHandler: (id: string, title: string) => void
  editHandler: (id: string) => void
  playHandler: (id: string) => void
  setSortHandler?: (value: string) => void
}
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
    key: 'author.name',
    title: 'Created by',
  },
  {
    key: 'actions',
    title: '',
  },
]

export const DesksList = ({
  card,
  deleteHandler,
  editHandler,
  playHandler,
  setSortHandler,
}: DeskListType) => {
  const [sort, setSort] = useState<SortType>(null)
  const sortedString = useMemo(() => {
    if (!sort) {
      return 'null'
    }
    if (sort) {
      return `${sort.key}-${sort.direction}`
    }
  }, [sort])

  if (setSortHandler) {
    setSortHandler(sortedString)
  }
  // console.log(sort)
  const deleteOnclick = (id: string, title: string) => {
    deleteHandler(id, title)
  }
  const classes = {
    navMenu: s.tdNavMenu,
    navMenuButton: s.tdNavMenuButton,
  }

  return (
    <Table>
      <TableHeader columns={columns} onSort={setSort} sort={sort} />
      <TableBody>
        {card?.map(item => (
          <Tr key={item.id}>
            <Td>
              <Typography
                as={Link}
                className={s.link}
                to={`/deck/${item.id}`}
                variant={TypographyVariant.body2}
              >
                {item.name}
              </Typography>
            </Td>
            <Td>{item.cards}</Td>
            <Td>{new Date(item.lastUpdated).toLocaleDateString()}</Td>
            <Td>{item.createdBy}</Td>
            <Td>
              <Button className={classes.navMenuButton} onClick={() => playHandler(item.id)}>
                <img src={Player} />
              </Button>
              <Button className={classes.navMenuButton} onClick={() => editHandler(item.id)}>
                <img src={Pen} />
              </Button>
              <Button
                className={classes.navMenuButton}
                onClick={() => deleteOnclick(item.id, item.name)}
              >
                <img src={Trash} />
              </Button>
            </Td>
          </Tr>
        ))}
      </TableBody>
    </Table>
  )
}
