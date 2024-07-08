import {
  CardWithGrade,
  CreateDeckArgs,
  DeckResponse,
  GetCards,
  // DeleteDeckArgs,
  GetDecksArgs,
  GetDecksResponse,
  SaveGrade,
} from '@/components/types/types'
import { baseApi } from '@/services/base-api'
export type ChangeDecksByID = {
  cover: string
  isPrivate: boolean
  name: string
}
export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      changeDecksByID: builder.mutation<void, { data: ChangeDecksByID; id: string }>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args.data,
          method: 'PATCH',
          url: `/v1/decks/${args.id}`,
        }),
      }),
      createDeck: builder.mutation<void, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: arg => ({
          body: arg,
          method: 'POST',
          url: '/v1/decks',
        }),
      }),
      deleteDeck: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Decks'],
        query: arg => ({
          method: 'DELETE',
          url: `/v1/decks/${arg.id}`,
        }),
      }),
      getCardsById: builder.query<GetCards, { id: string }>({
        providesTags: ['Decks'],
        query: arg => ({
          url: `v1/decks/${arg.id}/cards`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: arg => ({
          params: arg ?? undefined,
          url: 'v2/decks',
        }),
      }),
      getDecksById: builder.query<DeckResponse, { id: string }>({
        providesTags: ['Decks'],
        query: arg => ({
          url: `v1/decks/${arg.id}`,
        }),
      }),
      getLearnCards: builder.query<CardWithGrade, { id: string }>({
        providesTags: ['Decks'],
        query: arg => ({
          url: `v1/decks/${arg.id}/learn`,
        }),
      }),
      saveRate: builder.mutation<CardWithGrade, { data: SaveGrade; deckId: string }>({
        invalidatesTags: ['Decks'],
        query: arg => ({
          body: arg.data,
          method: 'DELETE',
          url: `/v1/decks/${arg.deckId}/learn`,
        }),
      }),
    }
  },
})

export const {
  useChangeDecksByIDMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsByIdQuery,
  useGetDecksByIdQuery,
  useGetDecksQuery,
  useGetLearnCardsQuery,
  useSaveRateMutation,
} = decksService
