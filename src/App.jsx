import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  // Link,
  // redirect,
} from 'react-router-dom';

import MainPage from '@pages/MainPage';
import LoginPage, { loader as loginPageLoader, action as LoginPageAction } from '@pages/LoginPage';
import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import VansPage, {
  loader as vansLoader,
} from '@pages/VansPage';
import VanDetailsPage, { loader as vanDetailsPageLoader } from '@pages/VanDetailsPage';
import ErrorPage from '@pages/ErrorPage';

import HostLayout from '@pages/Host/HostLayout';
import Dashboard, { loader as HostDashBoardLoader } from '@pages/Host/Dashboard';
import IncomePage, { loader as IncomePageLoader } from '@pages/Host/IncomePage';
import ReviewPage, { loader as reviewPageLoader } from '@pages/Host/ReviewPage';
import HostVansPage, { loader as hostVansPageLoader } from '@pages/Host/HostVansPage';
import HostVansDetails, { loader as hostVansDetailLoader } from '@pages/Host/HostVansDetails';

import HostVansDetailChild from '@pages/Host/Vans/HostVansDetailChild';
import HostVansPhotosChild from '@pages/Host/Vans/HostVansPhotosChild';
import HostVansPricingChild from '@pages/Host/Vans/HostVansPricingChild';

// import { getVans } from './api';
// import { authReq } from './helper/authReq';

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
        loader={loginPageLoader}
        action={LoginPageAction}
      />
      <Route
        path="about"
        element={<AboutPage />}
      />
      <Route
        path="vans"
        element={<VansPage />}
        loader={vansLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path="vans/:id"
        element={<VanDetailsPage />}
        loader={vanDetailsPageLoader}
        errorElement={<ErrorPage />}
      />

      <Route
        path="host"
        element={<HostLayout />}
      >
        <Route
          index
          element={<Dashboard />}
          loader={HostDashBoardLoader}
         // errorElement={<ErrorPage />}
        />
        <Route
          path="income"
          element={<IncomePage />}
          loader={IncomePageLoader}
        />
        <Route
          path="vans"
          element={<HostVansPage />}
          loader={hostVansPageLoader}
          errorElement={<ErrorPage />}
        />
        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          loader={hostVansDetailLoader}
          errorElement={<ErrorPage />}
        >
          <Route
            index
            element={<HostVansDetailChild />}
            loader={async () => null}
          />
          <Route path="pricing" element={<HostVansPricingChild />} loader={async () => null} />
          <Route path="photos" element={<HostVansPhotosChild />} loader={async () => null} />
        </Route>
        <Route path="reviews" element={<ReviewPage />} loader={reviewPageLoader} />

      </Route>
    </Route>,
  ),
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
