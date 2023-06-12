import {
  Suspense,
  useEffect,
} from 'react';
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
// import { BsStarFill } from 'react-icons/bs';

import { getHostVans } from '@api';
import authReq from '@helper/authReq';
import MapHostVan from '@features/MapHostVan';

export async function loader({ request }) {
  const pathname = await authReq(request);

  if (!pathname) {
    const vansList = getHostVans();
    return defer({ vansList, pathname });
  }

  return { vansList: [], pathname };
}
// add Dashboard, Income, and Reviews page placeholder
export default function Dashboard() {
  const navigate = useNavigate();
  const { vansList, pathname } = useLoaderData();

  useEffect(() => {
    if (pathname) {
      navigate(
        `/login?message=You must log in first.&redirectTo=${pathname}`,
        { replace: true },
      );
    }
  }, [pathname, navigate]);

  function renderVanList(vanListPromise) {
    return <MapHostVan vansList={vanListPromise} isDashboard />;
  }

  return (
    <main>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last
            {' '}
            <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>

      <section className="host-dashboard-reviews mb-7">
        <h2>Review score</h2>
        {/* <BsStarFill className="star" /> */}
        <p>
          <span>5.0</span>
          /5
        </p>
        <Link to="reviews">Details</Link>
      </section>

      <section className="font-inter text-dark-2 ">
        <h1 className="font-bold text-3xl mb-8">Your listed vans</h1>

        <div className="flex flex-col space-y-3.5">
          <Suspense fallback={<h1 className="text-center font-bold text-xl">...Loading</h1>}>
            <Await resolve={vansList}>
              {renderVanList}
            </Await>
          </Suspense>
        </div>
      </section>
    </main>
  );
}
