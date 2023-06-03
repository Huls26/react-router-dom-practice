import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  // Link,
} from 'react-router-dom';

import MainPage from '@pages/MainPage';
import LoginPage from '@pages/LoginPage';
import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import VansPage, {
// loader as vansLoader,
} from '@pages/VansPage';
import VanDetailsPage from '@pages/VanDetailsPage';
import ErrorPage from '@pages/ErrorPage';

import HostLayout from '@pages/Host/HostLayout';
import Dashboard from '@pages/Host/Dashboard';
import IncomePage from '@pages/Host/IncomePage';
import ReviewPage from '@pages/Host/ReviewPage';
import HostVansPage, { loader as hostVansPageLoader } from '@pages/Host/HostVansPage';
import HostVansDetails, { loader as hostVansDetailLoader } from '@pages/Host/HostVansDetails';

import HostVansDetailChild from '@pages/Host/Vans/HostVansDetailChild';
import HostVansPhotosChild from '@pages/Host/Vans/HostVansPhotosChild';
import HostVansPricingChild from '@pages/Host/Vans/HostVansPricingChild';

import { getVans } from './api';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainPage />,
//     children: [
//       {
//         path: '/',
//         element: <HomePage />,
//       },
//       {
//         path: '/about',
//         element: <AboutPage />,
//       },
//       {
//         path: '/vans',
//         element: <VansPage />,
//       },
//       {
//         path: '/vans/:id',
//         element: <VanDetailsPage />,
//       },
//       {
//         path: '/host',
//         element: <HostLayout />,
//         children: [
//           {
//             path: '/host',
//             element: <Dashboard />,
//           },
//           {
//             path: '/host/income',
//             element: <IncomePage />,
//           },
//           {
//             path: '/host/reviews',
//             element: <ReviewPage />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<MainPage />}
    >
      <Route path="*" element={<ErrorPage />} />
      <Route index element={<HomePage />} />
      <Route
        path="login"
        element={<LoginPage />}
      />
      <Route
        path="about"
        element={<AboutPage />}
      />
      <Route
        path="vans"
        element={<VansPage />}
        loader={getVans}
        errorElement={<ErrorPage />}
      />
      <Route
        path="vans/:id"
        element={<VanDetailsPage />}
      />

      <Route
        path="host"
        element={<HostLayout />}
      >
        <Route index element={<Dashboard />} loader={async () => null} />
        <Route path="income" element={<IncomePage />} loader={async () => null} />
        <Route
          path="vans"
          element={<HostVansPage />}
          loader={hostVansPageLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          loader={hostVansDetailLoader}
        >
          <Route
            index
            element={<HostVansDetailChild />}
            loader={async () => null}
          />
          <Route path="pricing" element={<HostVansPricingChild />} loader={async () => null} />
          <Route path="photos" element={<HostVansPhotosChild />} loader={async () => null} />
        </Route>
        <Route path="reviews" element={<ReviewPage />} loader={async () => null} />

      </Route>
    </Route>,
  ),
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
