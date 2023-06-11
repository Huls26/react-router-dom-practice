import {
  Suspense,
  useEffect,
  // Suspense,
} from 'react';
import {
  Await, defer, useLoaderData, useNavigate,
} from 'react-router-dom';

import HostVansDetailArticle from '@features/HostVansDetailArticle';
import { getHostVansDetail } from '@api';
import authReq from '@helper/authReq';

export async function loader({ params, request }) {
  const pathname = await authReq(request);

  if (!pathname) {
    const vansDetail = getHostVansDetail(params.id);
    return defer({ vansDetail, pathname });
  }

  return { vansList: [], pathname };
}

export default function HostVansDetails() {
  const { vansDetail, pathname } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname) {
      navigate(
        `/login?message=You must log in first.&redirectTo=${pathname}`,
        { replace: true },
      );
    }
  }, [pathname, navigate]);

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

  function renderVanDetail(vansDetailPromise) {
    return (
      <HostVansDetailArticle
        type={vansDetailPromise.type}
        img={vansDetailPromise.imageUrl}
        name={vansDetailPromise.name}
        price={vansDetailPromise.price}
        id={vansDetailPromise.id}
        description={vansDetailPromise.description}
      />
    );
  }

  return (
    <Suspense fallback={<h1 className="text-center font-bold text-xl">...Loading</h1>}>
      <Await resolve={vansDetail}>
        {renderVanDetail}
      </Await>
    </Suspense>
  );
}
