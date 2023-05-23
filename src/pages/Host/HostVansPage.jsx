import { useState, useEffect } from 'react';

import '../../server';
import HostVansArticle from '@features/HostVansArticle';

export default function HostVansPage() {
  const [vansList, setVansList] = useState(() => []);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then(({ vans }) => setVansList(() => [...vans]));
  }, []);

  const mapVansList = vansList.map((vans) => (
    <HostVansArticle
      // eslint-disable-next-line react/no-array-index-key
      key={vans.id}
      img={vans.imageUrl}
      name={vans.name}
      price={vans.price}
    />
  ));

  const loading = <h1 className="text-dark-1 text-lg font-bold text-center py-6">...Loading</h1>;
  return (
    <section className="font-inter text-dark-2 ">
      <h1 className="font-bold text-3xl mb-8">Your listed vans</h1>

      <div>
        {vansList.length ? mapVansList : loading}
      </div>

    </section>
  );
}
