import {
  Suspense,
  useEffect,
} from 'react';
import {
  Await,
  // Await,
  defer,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';

// import HostVansArticle from '@features/HostVansArticle';
import MapHostVan from '@features/MapHostVan';

import { getHostVans } from '@api';
import authReq from '@helper/authReq';

import '../../server';

export async function loader({ request }) {
  const pathname = await authReq(request);

  if (!pathname) {
    const vansList = getHostVans();
    return defer({ vansList, pathname });
  }

  return { vansList: [], pathname };
}

export default function HostVansPage() {
  const { vansList, pathname } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname) {
      navigate(
        `/login?message=You must log in first.&redirectTo=${pathname}`,
        { replace: true },
      );
    }
  }, [pathname, navigate]);

  // const mapVansList = vansList.map((vans) => (
  //   <HostVansArticle
  //     // eslint-disable-next-line react/no-array-index-key
  //     key={vans.id}
  //     img={vans.imageUrl}
  //     name={vans.name}
  //     price={vans.price}
  //     id={vans.id}
  //   />
  // ));

  function displayMapVansList(vansListPropmise) {
    return <MapHostVan vansList={vansListPropmise} />;
  }

  // eslint-disable-next-line max-len
  // const loading = <h1 className="text-dark-1 text-lg font-bold text-center py-6">...Loading</h1>;
  return (
    <section className="font-inter text-dark-2 ">
      <h1 className="font-bold text-3xl mb-8">Your listed vans</h1>

      <div className="flex flex-col space-y-3.5">
        <Suspense fallback={<h1 className="text-center font-bold text-xl">...Loading</h1>}>
          <Await resolve={vansList}>
            { displayMapVansList }
          </Await>
        </Suspense>
      </div>
    </section>
  );
}
