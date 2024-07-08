import { LoginArgs } from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getMe: builder.query<any, void>({
        providesTags: ['Auth'],
        query: () => ({
          url: 'v1/auth/me',
        }),
      }),
      login: builder.mutation<void, LoginArgs>({
        query: data => ({
          body: data,
          method: 'POST',
          url: 'v1/auth/login',
        }),
      }),
    }
  },
})
export const { useGetMeQuery, useLoginMutation } = authService
