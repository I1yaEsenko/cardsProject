import { Pagination } from '@/components/ui/pagination/pagination'

export function App() {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Pagination</h1>
      <Pagination
        currentPage={1}
        onChangePage={() => {}}
        options={[
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' },
        ]}
        pageSize={1}
        totalCount={200}
      />
    </div>
  )
}
