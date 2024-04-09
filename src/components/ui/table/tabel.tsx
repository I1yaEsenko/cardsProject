import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classes = {
      table: clsx(s.table, className),
    }

    return <table className={classes.table} {...rest} ref={ref} />
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

export const Render = () => {
  return (
    <Table>
      <TableHead>
        <Tr>
          <Th>Name</Th>
          <Th>Cards</Th>
          <Th>Last Updated</Th>
          <Th>Created by</Th>
          <Th />
        </Tr>
      </TableHead>
      <TableBody>
        <Tr>
          <Td>Pack Name</Td>
          <Td>4</Td>
          <Td>18.02.2024</Td>
          <Td>Pack Name</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>Pack Name</Td>
          <Td>4</Td>
          <Td>18.02.2024</Td>
          <Td>Pack Name</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>Pack Name</Td>
          <Td>4</Td>
          <Td>18.02.2024</Td>
          <Td>Pack Name</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>Pack Name</Td>
          <Td>4</Td>
          <Td>18.02.2024</Td>
          <Td>Pack Name</Td>
          <Td />
        </Tr>
      </TableBody>
    </Table>
  )
}

export const Tab = () => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>eekwek</th>
          <th>eekwek</th>
          <th>eekwek</th>
          <th>eekwek</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>rere</td>
          <td>rere</td>
          <td>rere</td>
          <td>rere</td>
        </tr>{' '}
        <tr>
          <td>rere</td>
          <td>rere</td>
        </tr>{' '}
        <tr>
          <td>rere</td>
          <td>rere</td>
        </tr>{' '}
        <tr>
          <td>rere</td>
          <td>rere</td>
        </tr>
      </tbody>
    </table>
  )
}
