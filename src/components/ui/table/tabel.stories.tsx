import { useMemo, useState } from 'react'

import {
  Sort,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  Td,
  Th,
  Tr,
} from '@/components/ui/table/tabel'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Table,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
}
const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]
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
    key: 'createdBy',
    title: 'Created by',
  },
]

export const WithSorts: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)
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
      <>
        <TableHeader columns={columns} onSort={setSort} sort={sort} />
        <TableBody>
          {data.map(item => (
            <Tr key={item.title}>
              <Td>{item.title}</Td>
              <Td>{item.cardsCount}</Td>
              <Td>{item.updated}</Td>
              <Td>{item.createdBy}</Td>
            </Tr>
          ))}
        </TableBody>
      </>
    )
  },
}
