import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DeskList } from '@/components/ui/table/desk-list'
import { useGetDecksQuery } from '@/services/base-api'

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
  {
    key: 'actions',
    title: '',
  },
]

export const Decks = () => {
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isLoading } = useGetDecksQuery({
    currentPage,
    name: search,
  })

  console.log(data)
  if (isLoading) {
    return <h1>loading</h1>
  }
  const mapData = data?.items.map(deck => ({
    cards: deck.cardsCount,
    createdBy: deck.author.name,
    id: deck.id,
    lastUpdated: deck.updated,
    name: deck.name,
  }))
  const paginationOptions = []

  for (let i = 0; i < (data?.pagination?.totalPages ?? 0); i++) {
    paginationOptions.push(i + 1)
  }

  return (
    <div>
      <Input onValueChange={setSearch} />
      <DeskList card={mapData} columns={columns} />
      <Link to={'/2'}>OtherPage</Link>
      {paginationOptions.map(i => {
        return (
          <Button key={i} onClick={() => setCurrentPage(i)}>
            {i}
          </Button>
        )
      })}
    </div>
  )
}
