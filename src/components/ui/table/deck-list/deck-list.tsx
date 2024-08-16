import { Table, TableBody, TableHeader } from '@/components/ui/table'

const columns = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'created',
    title: 'Last Updated',
  },
  {
    key: 'author.name',
    title: 'Created by',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
]

const DeckList = () => {
  return (
    <Table>
      <TableHeader columns={columns} />
      <TableBody></TableBody>
    </Table>
  )
}

export default DeckList
