import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import HostVansDetailArticle from '@features/HostVansDetailArticle';

export default function HostVansDetail() {
  const [hostVansDetail, setHostVansDetail] = useState(() => []);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setHostVansDetail(() => [...data.vans]));
  }, [id]);

  console.log(hostVansDetail);
  return (
    <HostVansDetailArticle
      type="simple"
      img="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
      name="Modex X"
      price={69}
    />
  );
}
