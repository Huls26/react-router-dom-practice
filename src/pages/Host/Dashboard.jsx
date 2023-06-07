import authReq from '@helper/authReq';
import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

export async function loader() {
  const user = await authReq();

  return user ? 'something' : user;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const data = useLoaderData();

  useEffect(() => {
    if (!data) {
      navigate('/login?message=You must log in first.&path=host', { replace: true });
    }
  }, [data, navigate]);

  return (
    <div>
      This is Dashboard
    </div>
  );
}
