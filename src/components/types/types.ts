import { components, operations } from '@/services/schema'

export type ColumnType = {
  key: string
  title: string
}
export type SortType = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type CardType = {
  cards: number
  createdBy: string
  id: string
  lastUpdated: string
  name: string
}
export type FriendsCards = {
  answer: string
  grade: number
  question: string
  updated: string
}
export type GetDecksResponse = components['schemas']['PaginatedDecks']
export type GetDecksArgs = operations['DecksController_findAllV2']['parameters']['query']
export type CreateDeckArgs = components['schemas']['CreateDeckRequest']
export type DeleteDeckArgs = operations['DecksController_remove']['parameters']['path']
