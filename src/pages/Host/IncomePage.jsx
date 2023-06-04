import { useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import authReq from '@helper/authReq';

export async function loader() {
  const user = await authReq();

  return user ? 'something' : user;
}

export default function IncomePage() {
  const navigate = useNavigate();
  const data = useLoaderData();

  useEffect(() => {
    if (!data) {
      navigate('/login', { replace: true });
    }
  }, [data, navigate]);

  return (
    <div> this IncomePage</div>
  );
}
