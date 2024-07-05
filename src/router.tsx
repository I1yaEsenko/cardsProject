import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import DeckPage from '@/pages/deck-page/deck-page'
import { Decks } from '@/pages/decks'
import LearnPage from '@/pages/learn-page/learn-page'

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
    path: '/login',
  },
]
// const Component2 = () => {
//   const { data } = useGetDecksQuery()
//
//   return (
//     <div>
//       <Link to={'/'}>MainPage</Link>
//       <div>{JSON.stringify(data)}</div>
//     </div>
//   )
// }

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
  {
    element: <DeckPage />,
    path: '/deck/:deckId',
  },
  {
    element: <LearnPage />,
    path: '/deck/:deckId/learn',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
