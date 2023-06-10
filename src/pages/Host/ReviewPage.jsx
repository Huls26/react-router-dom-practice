import { useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import authReq from '@helper/authReq';

export async function loader({ request }) {
  const pathname = await authReq(request);

  if (!pathname) {
    return { data: ['something'], pathname };
  }

  return { data: [''], pathname };
}

export default function ReviewPage() {
  const navigate = useNavigate();
  const { data, pathname } = useLoaderData();

  useEffect(() => {
    if (pathname) {
      navigate(
        `/login?message=You must log in first.&redirectTo=${pathname}`,
        { replace: true },
      );
    }
  }, [pathname, navigate]);

  return (
    <div>{data}</div>
  );
}
