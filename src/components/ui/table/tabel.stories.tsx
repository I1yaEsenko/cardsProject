import { Table, TableBody, TableHead, Td, Th, Tr } from '@/components/ui/table/tabel'
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
