import { useEffect, useState } from 'react'

import { Pagination } from '@/components/ui/pagination'

const options = [
  { title: '5', value: '5' },
  { title: '7', value: '7' },
  { title: '10', value: '10' },
  { title: '15', value: '15' },
]

type Props = {
  currentPage: number
  data: any
  setCurrentPage: (page: number) => void
  setForm: (value: number) => void
}
export const PaginationContainer = ({ currentPage, data, setCurrentPage, setForm }: Props) => {
  const [view, setView] = useState<string>('5')

  useEffect(() => {
    setForm(Number(view))
  }, [setForm, view])

  return (
    <Pagination
      currentPage={currentPage | 1}
      onChangePage={setCurrentPage}
      options={options}
      pageSize={1}
      setForm={setView}
      totalCount={data.totalPages}
    />
  )
}
