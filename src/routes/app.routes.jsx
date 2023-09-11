import { useRoutes } from "react-router-dom"

import { Home } from '../assets/pages/Home'
import { DishPreview } from '../assets/pages/DishPreview'
import { NewDish } from '../assets/pages/NewDish'
import { EditDish } from '../assets/pages/EditDish'

function AppRoutes({ user }) {
  const adminRoutes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/preview/:id',
      element: <DishPreview />,
    },
    {
      path: '/newdish',
      element: <NewDish />,
    },
    {
      path: '/editdish/:id',
      element: <EditDish />,
    }
  ]

  const userRoutes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/preview/:id',
      element: <DishPreview />,
    }
  ]

  const routes = user.admin ? adminRoutes : userRoutes

  const appRoute = useRoutes(routes)

  return appRoute
}

export { AppRoutes }
