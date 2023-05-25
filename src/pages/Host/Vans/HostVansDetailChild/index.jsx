import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ArticleDetails from './components/ArticleDetails';

export default function HostVansDetailChild() {
  const [vansDetail, setVansDetail] = useState(() => {});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVansDetail(() => {
        const [d] = data.vans;

        return { ...d };
      }));
  }, [id]);

  return (
    vansDetail ? (
      <ArticleDetails
        name={vansDetail.name}
        type={vansDetail.type}
        description={vansDetail.description}
      />
    ) : <h1 className="font-bold text-3xl text-center mt-4">...Loading</h1>
  );
}
