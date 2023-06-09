import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import HostVansArticle from '@features/HostVansArticle';

import { getHostVans } from '@api';
import authReq from '@helper/authReq';

import '../../server';

// fix
// add a previous pathname
export async function loader({ request }) {
  const user = await authReq(request);

  if (user) {
    const vansList = await getHostVans();
    return { vansList, user };
  }

  return { vansList: [], user };
}

export default function HostVansPage() {
  const { vansList, user } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login?message=You must log in first.', { replace: true });
    }
  }, [user, navigate]);

  const mapVansList = vansList.map((vans) => (
    <HostVansArticle
      // eslint-disable-next-line react/no-array-index-key
      key={vans.id}
      img={vans.imageUrl}
      name={vans.name}
      price={vans.price}
      id={vans.id}
    />
  ));

  // eslint-disable-next-line max-len
  // const loading = <h1 className="text-dark-1 text-lg font-bold text-center py-6">...Loading</h1>;
  return (
    <section className="font-inter text-dark-2 ">
      <h1 className="font-bold text-3xl mb-8">Your listed vans</h1>

      <div className="flex flex-col space-y-3.5">
        { mapVansList }
      </div>

    </section>
  );
}
