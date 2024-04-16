import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

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

export type Column = {
  key: string
  title: string
}
export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      onSort?: (sort: Sort) => void
      sort?: Sort
    },
    'children'
  >
> = ({ columns, onSort, sort, ...restProps }) => {
  const handleSort = (key: string) => {
    if (!onSort) {
      return
    }

    if (sort?.key !== key) {
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

  return (
    <TableHead {...restProps}>
      <Tr>
        {columns.map(column => (
          <Th key={column.key} onClick={() => handleSort(column.key)}>
            {column.title}
            {sort && sort.key === column.key && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </Th>
        ))}
      </Tr>
    </TableHead>
  )
}
