import { useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import authReq from '@helper/authReq';

export async function loader() {
  const user = await authReq();

  if (user) {
    return { data: ['something'], user };
  }

  return { data: [''], user };
}

export default function ReviewPage() {
  const navigate = useNavigate();
  const { data, user } = useLoaderData();

  useEffect(() => {
    if (!user) {
      navigate('/login?message=You must log in first.', { replace: true });
    }
  }, [user, navigate]);

  return (
    <div>{data}</div>
  );
}
