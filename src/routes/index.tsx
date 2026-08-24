import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '@/layouts/AdminLayout'
import AuthLayout from '@/layouts/AuthLayout'
import PublicLayout from '@/layouts/PublicLayout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NewsDetail from '@/pages/NewsDetail'

const AdminDashboard = lazy(() => import('@/pages/Admin/Dashboard'))
const AdminNewsList = lazy(() => import('@/pages/Admin/NewsList'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'news/:slug', element: <NewsDetail /> },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AdminDashboard />
          </Suspense>
        ),
      },
      {
        path: 'news',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AdminNewsList />
          </Suspense>
        ),
      },
    ],
  },
])
