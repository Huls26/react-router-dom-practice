import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import HostVansDetailArticle from '@features/HostVansDetailArticle';
import { getHostVansDetail } from '@api';
import authReq from '@helper/authReq';

export async function loader({ params }) {
  const user = await authReq();

  if (user) {
    const [vansDetail] = await getHostVansDetail(params.id);
    return { vansDetail, user };
  }

  return { vansList: [], user };
}

export default function HostVansDetails() {
  const { vansDetail, user } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login?message=You must log in first.', { replace: true });
    }
  }, [user, navigate]);

  // const [vansDetail, setVansDetail] = useState(() => {});
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVansDetail(() => {
  //       const [d] = data.vans;

  //       return { ...d };
  //     }));
  // }, [id]);

  return (
    vansDetail
    && (
    <HostVansDetailArticle
      type={vansDetail.type}
      img={vansDetail.imageUrl}
      name={vansDetail.name}
      price={vansDetail.price}
      id={vansDetail.id}
      description={vansDetail.description}
    />
    )
  );
}
