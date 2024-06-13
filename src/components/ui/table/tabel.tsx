import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import ArrowUp from '@/assets/icons/arrow-Up.svg'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import Pen from '@/assets/icons/pen.svg'
import Player from '@/assets/icons/player.svg'
import Trash from '@/assets/icons/trash.svg'
import { ColumnType, SortType } from '@/components/types'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx'

import s from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ children, className, ...rest }, ref) => {
    const classes = {
      table: clsx(s.table, className),
    }

    return (
      <table className={classes.table} {...rest} ref={ref}>
        {children}
      </table>
    )
  }
)
export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref) => {
    const classes = {
      thead: clsx(s.thead, className),
    }

    return <thead className={classes.thead} {...rest} ref={ref} />
  }
)
export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody {...rest} ref={ref} />
  }
)
export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ children, ...rest }, ref) => {
    return <tr {...rest} ref={ref} />
  }
)
export const Td = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ children, className, ...rest }, ref) => {
    const classes = {
      td: clsx(s.td, className),
    }

    return (
      <td className={classes.td} {...rest} ref={ref}>
        {children}
      </td>
    )
  }
)
type PropsType = {
  deleteHandler: (id: string) => void
  editHandler: (id: string) => void
  playHandler: (id: string) => void
} & ComponentPropsWithoutRef<'div'>
export const NavMenuTd = forwardRef<ElementRef<'div'>, PropsType>(({ ...restProps }, ref) => {
  const classes = {
    navMenu: s.tdNavMenu,
    navMenuButton: s.tdNavMenuButton,
  }

  return (
    <div className={classes.navMenu} {...restProps} ref={ref}>
      <Button className={classes.navMenuButton}>
        <img src={Player} />
      </Button>
      <Button className={classes.navMenuButton}>
        <img src={Pen} />
      </Button>
      <Button className={classes.navMenuButton}>
        <img src={Trash} />
      </Button>
    </div>
  )
})
export const Th = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, className, ...rest }, ref) => {
    const classes = {
      th: clsx(s.th, className),
    }

    return (
      <th className={classes.th} {...rest} ref={ref}>
        <span>{children}</span>
      </th>
    )
  }
)
export const Tr = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ children, className, ...rest }, ref) => {
    const classes = {
      tr: clsx(s.tr, className),
    }

    return (
      <tr className={classes.tr} {...rest} ref={ref}>
        {children}
      </tr>
    )
  }
)

export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: ColumnType[]
      onSort?: (sort: SortType) => void
      sort?: SortType
    },
    'children'
  >
> = ({ columns, onSort, sort, ...restProps }) => {
  const handleSort = (key: string) => {
    if (!onSort) {
      return
    }

    if (sort?.key !== key) {
      debugger

      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  console.log(sort)

  return (
    <TableHead {...restProps}>
      <Tr>
        {columns.map(column =>
          column.key !== 'actions' ? (
            <Th key={column.key} onClick={() => handleSort(column.key)}>
              {column.title}
              {sort && sort.key === column.key && (
                <span>
                  {sort.direction === 'asc' ? (
                    <img alt={'Arrow-Down'} className={s.img} src={ArrowUp} />
                  ) : (
                    <img alt={'Arrow-Down'} className={s.img} src={ArrowDown} />
                  )}
                </span>
              )}
              {onSort && sort?.key !== column.key && <span className={s.img}></span>}
            </Th>
          ) : (
            <Th key={column.key}>{column.title}</Th>
          )
        )}
      </Tr>
    </TableHead>
  )
}
