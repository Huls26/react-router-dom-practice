import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  // Link,
} from 'react-router-dom';

import MainPage from '@pages/MainPage';
import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import VansPage from '@pages/VansPage';
import VanDetailsPage from '@pages/VanDetailsPage';
import ErrorPage from '@pages/ErrorPage';

import HostLayout from '@pages/Host/HostLayout';
import Dashboard from '@pages/Host/Dashboard';
import IncomePage from '@pages/Host/IncomePage';
import ReviewPage from '@pages/Host/ReviewPage';
import HostVansPage from '@pages/Host/HostVansPage';
import HostVansDetails from '@pages/Host/HostVansDetails';

import HostVansDetailChild from '@pages/Host/Vans/HostVansDetailChild';
import HostVansPhotosChild from '@pages/Host/Vans/HostVansPhotosChild';
import HostVansPricingChild from '@pages/Host/Vans/HostVansPricingChild';

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
        path="about"
        element={<AboutPage />}
      />
      <Route
        path="vans"
        element={<VansPage />}
      />
      <Route
        path="vans/:id"
        element={<VanDetailsPage />}
      />

      <Route
        path="host"
        element={<HostLayout />}
      >
        <Route index element={<Dashboard />} />
        <Route path="income" element={<IncomePage />} />
        <Route path="vans" element={<HostVansPage />} />
        <Route path="vans/:id" element={<HostVansDetails />}>
          <Route index element={<HostVansDetailChild />} />
          <Route path="pricing" element={<HostVansPricingChild />} />
          <Route path="photos" element={<HostVansPhotosChild />} />
        </Route>
        <Route path="reviews" element={<ReviewPage />} />

      </Route>
    </Route>,
  ),
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
