import { useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import authReq from '@helper/authReq';
import imageChart from '@assets/images/income-graph.svg';

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

  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: '1' },
    { amount: 560, date: "Dec 12, '22", id: '2' },
    { amount: 980, date: "Dec 3, '22", id: '3' },
  ];
  return (
    <section className="host-income">
      <h1>Income</h1>
      <p>
        Last
        {' '}
        <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img
        className="graph"
        src={imageChart}
        alt="Income graph"
      />
      <div className="info-header">
        <h3>Your transactions (3)</h3>
        <p>
          Last
          {' '}
          <span>30 days</span>
        </p>
      </div>
      <div className="transactions">
        {transactionsData.map((item) => (
          <div key={item.id} className="transaction">
            <h3>
              $
              {item.amount}
            </h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
