import {
  Suspense,
  // useState, useEffect,
} from 'react';
import {
  Await,
  defer, useLoaderData, // useParams,
} from 'react-router-dom';

import VanDetails from '@features/VanDetail/VanDetails';
import { getVanDetails } from '@api';

export async function loader({ params }) {
  const detailPromise = getVanDetails(params.id);

  return defer({ vanInfo: detailPromise });
}

export default function VanDetailsPage() {
  const { vanInfo } = useLoaderData();
  // const [vanInfo, setVanInfo] = useState(() => {});
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`/api/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVanInfo({ ...data.vans }));
  // }, [id]);

  function renderVanDetails(vanDetailsPromise) {
    return <VanDetails info={vanDetailsPromise} />;
  }

  return (
    <Suspense fallback={<h1 className="text-dark-1 text-4xl font-semibold text-center py-[5em] bg-btnBg">Loading...</h1>}>
      <Await resolve={vanInfo}>
        {renderVanDetails}
      </Await>
    </Suspense>
  );
}
