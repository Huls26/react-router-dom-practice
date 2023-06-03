import { useLoaderData } from 'react-router-dom';

import HostVansDetailArticle from '@features/HostVansDetailArticle';
import { getHostVansDetail } from '@api';

export async function loader({ params }) {
  const data = getHostVansDetail(params.id);

  return data;
}

export default function HostVansDetails() {
  const [vansDetail] = useLoaderData();

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
    vansDetail ? (
      <HostVansDetailArticle
        type={vansDetail.type}
        img={vansDetail.imageUrl}
        name={vansDetail.name}
        price={vansDetail.price}
        id={vansDetail.id}
        description={vansDetail.description}
      />
    )
      : <h1 className="text-3xl font-bold text-center mt-3">...Loading</h1>

  );
}
