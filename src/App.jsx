import {
  createBrowserRouter,
  RouterProvider,
  // Link,
} from 'react-router-dom';

import Header from './features/Header';
// import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
