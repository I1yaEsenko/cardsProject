import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './table.module.scss'
export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ ...rest }, ref) => {
    return <table {...rest} ref={ref} />
  }
)
export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...rest }, ref) => {
    return <thead {...rest} ref={ref} />
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
  ({ children, ...rest }, ref) => {
    return (
      <td {...rest} ref={ref}>
        {children}
      </td>
    )
  }
)
export const Th = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, ...rest }, ref) => {
    return (
      <th {...rest} ref={ref}>
        <span>{children}</span>
      </th>
    )
  }
)
export const Tr = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ children, ...rest }, ref) => {
    return (
      <tr {...rest} ref={ref}>
        {children}
      </tr>
    )
  }
)

export const Render = () => {
  return (
    <Table className={s.table}>
      <TableHead className={s.thead}>
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
