import {
  CreateDeckArgs,
  DeleteDeckArgs,
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
      deleteDeck: builder.mutation<void, DeleteDeckArgs>({
        invalidatesTags: ['Decks'],
        query: arg => ({
          method: 'DELETE',
          url: `/v1/decks/${arg.id}`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: arg => ({
          params: arg ?? undefined,
          url: 'v2/decks',
        }),
      }),
    }
  },
})

export const { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery } = decksService
