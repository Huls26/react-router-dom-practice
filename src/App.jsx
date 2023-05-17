import {
  createBrowserRouter,
  RouterProvider,
  // Link,
} from 'react-router-dom';

import MainPage from '@pages/MainPage';
import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import VansPage from './pages/VansPage';
import VanDetails from './pages/VanDetails';

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
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/vans',
        element: <VansPage />,
      },
      {
        path: '/vans/:id',
        element: <VanDetails />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
