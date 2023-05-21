import {
  createBrowserRouter,
  RouterProvider,
  // Link,
} from 'react-router-dom';

import MainPage from '@pages/MainPage';
import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import VansPage from '@pages/VansPage';
import VanDetailsPage from '@pages/VanDetailsPage';
import HostLayout from '@pages/Host/HostLayout';
import Dashboard from '@pages/Host/Dashboard';
import IncomePage from '@pages/Host/IncomePage';
import ReviewPage from '@pages/Host/ReviewPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/host',
        element: <HostLayout />,
        children: [
          {
            path: '/host',
            element: <Dashboard />,
          },
          {
            path: '/host/income',
            element: <IncomePage />,
          },
          {
            path: '/host/reviews',
            element: <ReviewPage />,
          },
        ],
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/vans',
        element: <VansPage />,
      },
      {
        path: '/vans/:id',
        element: <VanDetailsPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
