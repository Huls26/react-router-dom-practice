import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import VanDetails from '@features/VanDetail/VanDetails';

export default function VanDetailsPage() {
  const [vanInfo, setVanInfo] = useState(() => {});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo({ ...data.vans }));
  }, [id]);

  return (
    vanInfo ? <VanDetails info={vanInfo} /> : <h1 className="text-dark-1 text-4xl font-semibold text-center py-[5em] bg-btnBg">Loading...</h1>
  );
}
