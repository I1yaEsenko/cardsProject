import { Provider } from 'react-redux'

import Layout from '@/components/layout/layout'
import Header from '@/components/ui/header/header'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}
