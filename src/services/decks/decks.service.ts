import {
  CreateDeckArgs,
  DeckResponse,
  GetCards,
  // DeleteDeckArgs,
  GetDecksArgs,
  GetDecksResponse,
} from '@/components/types/types'
import { baseApi } from '@/services/base-api'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
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
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsByIdQuery,
  useGetDecksByIdQuery,
  useGetDecksQuery,
} = decksService
