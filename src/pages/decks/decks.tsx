import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { DeskList } from '@/components/ui/table/desk-list'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs/tabs'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import { CreateDecks } from '@/pages/decks/createDecks'
import { PaginationContainer } from '@/pages/decks/paginationContainer'
import { useDeleteDeckMutation, useGetDecksQuery } from '@/services/decks/decks.service'

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
  const [view, setView] = useState<number>(5)

  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isLoading } = useGetDecksQuery({
    currentPage,
    itemsPerPage: Number(view),
    name: search,
    // orderBy: 'author.name-',
  })

  const [deleteDeck] = useDeleteDeckMutation()

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
  const deleteHandler = (id: string) => {
    deleteDeck({ id })
  }
  const playHandler = (id: string) => {
    console.log('playHandler: ' + id)
  }
  const editHandler = (id: string) => {
    console.log('editHandler: ' + id)
  }

  const setPage = (page: number) => {
    setCurrentPage(page)
  }
  const setForm = (value: number) => {
    setView(value)
  }

  return (
    <div style={{ margin: 'auto', width: '1006px' }}>
      <CreateDecks />
      <div>
        <Typography variant={TypographyVariant.h1}>Decks list</Typography>
        <Button>Add New Deck</Button>
      </div>
      <div className={''}>
        <Input onValueChange={setSearch} />
        tabs
        <Tabs asChild>
          <TabsList>
            <TabsTrigger value={'my'}>My decks</TabsTrigger>
            <TabsTrigger value={'all'}>All decks</TabsTrigger>
          </TabsList>
        </Tabs>
        <Slider />
        <Button variant={'secondary'}>Clear Filter</Button>
      </div>
      <DeskList
        card={mapData}
        columns={columns}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        playHandler={playHandler}
      />

      <PaginationContainer
        currentPage={1}
        data={data?.pagination}
        setCurrentPage={setPage}
        setForm={setForm}
      />
    </div>
  )
}
