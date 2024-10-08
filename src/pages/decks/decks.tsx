import { useState } from 'react'

import { CreateDecks } from '@/components/decks/create-decks'
import DeleteDecks from '@/components/decks/delete-decks/delete-decks'
// import { GetOrderBysArgs } from '@/components/types/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { DesksList } from '@/components/ui/table/desks-list'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs/tabs'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'
import { PaginationContainer } from '@/pages/decks/paginationContainer'
import {
  useChangeDecksByIDMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksByIdQuery,
  useGetDecksQuery,
} from '@/services/decks/decks.service'

import s from './decks.module.scss'

export const Decks = () => {
  const [view, setView] = useState<number>(5)
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [values, setValues] = useState([0, 100])
  const [sort, setSort] = useState('null')
  const [createDeckModal, setCreateModal] = useState(false)

  const [createDeck] = useCreateDeckMutation()
  const { data, isLoading } = useGetDecksQuery({
    currentPage,
    itemsPerPage: Number(view),
    maxCardsCount: values[1],
    minCardsCount: values[0],
    name: search,
    orderBy: sort == 'null' ? 'null' : sort,
  })
  //Delete
  const [deleteDeck] = useDeleteDeckMutation()
  const [deleteDeckModal, setDeleteModal] = useState(false)
  // const [deleteDeckModalTitle, setDeleteDeckModalTitle] = useState('')
  const [deleteDeckModalId, setDeleteDeckModalId] = useState('')

  const { data: deckDeleteData } = useGetDecksByIdQuery({ id: deleteDeckModalId || '' })

  const [editDeckModal, setEditDeckModal] = useState(false)
  // const [deleteDeckModalTitle, setDeleteDeckModalTitle] = useState('')
  const [editDeckModalId, setEditDeckModalId] = useState('')

  const { data: editDeck } = useGetDecksByIdQuery({ id: editDeckModalId || '' })

  //

  const [changeDeck] = useChangeDecksByIDMutation()

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
    setDeleteDeckModalId(id)
    setDeleteModal(true)
    // setDeleteDeckModalTitle(deckDeleteData?.name || '')
  }
  const deleteSubmit = () => {
    deleteDeck({ id: deleteDeckModalId })
    setDeleteDeckModalId('')
    // setDeleteDeckModalTitle('')
    setDeleteModal(false)
  }
  const playHandler = (id: string) => {
    console.log('playHandler: ' + id)
  }

  const setPage = (page: number) => {
    setCurrentPage(page)
  }
  const setForm = (value: number) => {
    setView(value)
  }
  const setSortHandler = (value: string) => {
    setSort(value)
  }
  const createDecks = (data: any) => {
    createDeck(data)
  }
  const changeDeckHandler = (id: any) => {
    setEditDeckModalId(id)
    setEditDeckModal(true)
  }
  const submitChangeDeck = (data: any) => {
    changeDeck({ data, id: editDeckModalId })
    setEditDeckModal(true)
  }

  return (
    <div style={{ margin: '0 auto', width: '1010px' }}>
      <DeleteDecks
        cancelName={'Cancel'}
        onOpenChange={setDeleteModal}
        onSubmit={deleteSubmit}
        open={deleteDeckModal}
        submitName={'Delete Card'}
        title={'Delete Card'}
        titleDeck={deckDeleteData?.name || ''}
      />
      {/*<EditDeck onSubmitForm={} title={'Edit Deck'} />*/}
      <div className={s.header}>
        <Typography variant={TypographyVariant.h1}>Decks list</Typography>
        <Button onClick={() => setCreateModal(true)}>Add New Deck</Button>
        <CreateDecks
          name={'er'}
          onOpenChange={setCreateModal}
          onSubmitForm={createDecks}
          open={createDeckModal}
          title={'Add New Deck'}
        />

        <CreateDecks
          isPrivate={editDeck?.isPrivate}
          name={editDeck?.name}
          onOpenChange={setEditDeckModal}
          onSubmitForm={submitChangeDeck}
          open={editDeckModal}
          title={'Change Deck'}
        />
      </div>
      <div className={s.filter}>
        <Input onValueChange={setSearch} placeholder={'Input search'} search />
        <div className={s.tabsWrapp}>
          <Typography as={'p'} variant={TypographyVariant.body2}>
            Show decks cards
          </Typography>
          <Tabs asChild value={'all'}>
            <TabsList defaultValue={'my'}>
              <TabsTrigger value={'my'}>My decks</TabsTrigger>
              <TabsTrigger value={'all'}>All decks</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className={s.sliderWrapp}>
          <Typography as={'p'} variant={TypographyVariant.body2}>
            Number of cards
          </Typography>
          <Slider
            className={s.slider}
            max={100}
            min={1}
            onValueChange={setValues}
            step={1}
            value={values}
          />
        </div>
        <Button variant={'secondary'}>Clear Filter</Button>
      </div>
      <DesksList
        card={mapData}
        deleteHandler={deleteHandler}
        editHandler={changeDeckHandler}
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
