import { useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import authReq from '@helper/authReq';

export async function loader({ request }) {
  const user = await authReq(request);

  return user;
}

export default function IncomePage() {
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
    <div> this IncomePage</div>
  );
}
