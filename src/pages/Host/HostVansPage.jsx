import { useLoaderData } from 'react-router-dom';

import HostVansArticle from '@features/HostVansArticle';

import { getHostVans } from '@api';

import '../../server';

export async function loader() {
  const data = getHostVans();

  return data;
}

export default function HostVansPage() {
  const vansList = useLoaderData();

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

  const loading = <h1 className="text-dark-1 text-lg font-bold text-center py-6">...Loading</h1>;
  return (
    <section className="font-inter text-dark-2 ">
      <h1 className="font-bold text-3xl mb-8">Your listed vans</h1>

      <div className="flex flex-col space-y-3.5">
        {vansList.length ? mapVansList : loading}
      </div>

    </section>
  );
}
