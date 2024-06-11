import { useState } from 'react'

import { GetOrderBysArgs } from '@/components/types/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { DeskList } from '@/components/ui/table/desk-list'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs/tabs'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import { PaginationContainer } from '@/pages/decks/paginationContainer'
import { useDeleteDeckMutation, useGetDecksQuery } from '@/services/decks/decks.service'

import s from './decks.module.scss'
export const Decks = () => {
  const [view, setView] = useState<number>(5)

  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [values, setValues] = useState([0, 100])
  const [sort, setSort] = useState<GetOrderBysArgs>()
  const { data, isLoading } = useGetDecksQuery({
    currentPage,
    itemsPerPage: Number(view),
    maxCardsCount: values[1],
    minCardsCount: values[0],
    name: search,
    orderBy: sort,
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
  const setSortHandler = (value: GetOrderBysArgs) => {
    setSort(value)
  }

  return (
    <div style={{ margin: 'auto', width: '1010px' }}>
      {/*<CreateDecks />*/}
      <div className={s.header}>
        <Typography variant={TypographyVariant.h1}>Decks list</Typography>
        <Button>Add New Deck</Button>
      </div>
      <div className={s.filter}>
        <Input onValueChange={setSearch} placeholder={'Input search'} search />

        <Tabs asChild>
          <TabsList defaultValue={'my'}>
            <TabsTrigger value={'my'}>My decks</TabsTrigger>
            <TabsTrigger value={'all'}>All decks</TabsTrigger>
          </TabsList>
        </Tabs>
        <Slider
          className={s.slider}
          max={100}
          min={1}
          onValueChange={setValues}
          step={1}
          value={values}
        />
        <Button variant={'secondary'}>Clear Filter</Button>
      </div>
      <DeskList
        card={mapData}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        playHandler={playHandler}
        setSortHandler={setSortHandler}
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
