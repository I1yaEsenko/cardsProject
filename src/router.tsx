import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { SignIn } from '@/components/forms/sign-in/sign-in'
import DeckPage from '@/pages/deck-page/deck-page'
import { Decks } from '@/pages/decks'
import LearnPage from '@/pages/learn-page/learn-page'
import { useGetMeQuery } from '@/services/auth/auth.service'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
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
  const { data, isError } = useGetMeQuery()

  console.log(data)
  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
