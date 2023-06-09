import authReq from '@helper/authReq';
import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

export async function loader({ request }) {
  const user = await authReq(request);

  return user;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const pathname = useLoaderData();

  useEffect(() => {
    if (pathname) {
      navigate(
        `/login?message=You must log in first.&redirectTo=${pathname}`,
        { replace: true },
      );
    }
  }, [pathname, navigate]);

  return (
    <div>
      This is Dashboard
    </div>
  );
}
