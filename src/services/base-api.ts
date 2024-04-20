import { GetDecksArgs, GetDecksResponse } from '@/components/types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        query: arg => ({
          params: arg ?? undefined,
          url: 'v2/decks',
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const { useGetDecksQuery } = baseApi
