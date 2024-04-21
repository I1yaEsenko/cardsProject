import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { DeskList } from '@/components/ui/table/desk-list'
import Tabs from '@/components/ui/tabs/tabs'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
} from '@/services/decks/decks.service'

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
  const { control, handleSubmit } = useForm()
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isLoading } = useGetDecksQuery({
    currentPage,
    name: search,
  })
  const [createDeck, { isLoading: isDeckBeingCreate }] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

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
  const deleteHandler = (id: string) => {
    deleteDeck({ id })
  }

  return (
    <div style={{ margin: 'auto', width: '1006px' }}>
      <form
        onSubmit={handleSubmit(data => {
          createDeck(data as any)
        })}
        style={{ border: '2px solid red', margin: '5px' }}
      >
        <ControlledInput control={control} name={'name'} />
        <ControlledCheckbox control={control} label={'Private Decks'} name={'isPrivate'} />
        <Button disabled={isDeckBeingCreate}>Create Deck</Button>
      </form>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant={TypographyVariant.h1}>Decks list</Typography>
        <Button>Add New Deck</Button>
      </div>
      <div className={''}>
        <Input onValueChange={setSearch} />
        <Tabs />
        <Slider />
        <Button variant={'secondary'}>Clear Filter</Button>
      </div>
      <DeskList card={mapData} columns={columns} deleteHandler={deleteHandler} />
      <Link to={'/2'}>OtherPage</Link>

      <Pagination
        currentPage={currentPage | 1}
        onChangePage={setCurrentPage}
        options={data?.items}
        pageSize={data?.pagination.itemsPerPage}
        totalCount={data?.pagination.totalPages}
      />
    </div>
  )
}
