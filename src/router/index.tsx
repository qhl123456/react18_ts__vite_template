import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home'))
const HomeCount = lazy(() => import('@/views/Home/components/HomeCount'))
const HomeMessage = lazy(() => import('@/views/Home/components/HomeMessage'))

const Category = lazy(() => import('@/views/Category'))
const NotFound = lazy(() => import('@/views/NotFound'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/home/count" />
      },
      {
        path: '/home/count',
        element: <HomeCount />
      },
      {
        path: '/home/message',
        element: <HomeMessage />
      }
    ]
  },
  {
    path: '/category',
    element: <Category />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
