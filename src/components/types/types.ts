export type ColumnType = {
  key: string
  title: string
}
export type SortType = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type CardType = {
  cardsCount: number
  createdBy: string
  title: string
  updated: string
}
export type FriendsCards = {
  answer: string
  grade: number
  question: string
  updated: string
}
