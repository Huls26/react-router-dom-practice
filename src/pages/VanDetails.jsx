import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import arrow from '@assets/arrow-1.svg';

export default function VanDetails() {
  const [vanInfo, setVanInfo] = useState(() => {});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo({ ...data.vans }));
  }, [id]);

  return (
    <section className="bg-white px-6 pt-10">
      <Link to="/vans">
        <button className="flex space-x-2 items-center text-base font-medium font-inter text-dark-4 underline underline-offset-2 mb-10 hover:text-gray-1" type="button">
          <div>
            <img src={arrow} alt="arrow" />
          </div>
          <span>Back to all vans</span>
        </button>
      </Link>
      {' '}
      { vanInfo && vanInfo.name }
    </section>
  );
}
