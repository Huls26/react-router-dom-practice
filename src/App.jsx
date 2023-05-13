import {
  createBrowserRouter,
  RouterProvider,
  // Link,
} from 'react-router-dom';

import AboutPage from '@pages/AboutPage';
import MainPage from '@pages/MainPage';
import HomePage from '@pages/HomePage';

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
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
