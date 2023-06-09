import { Outlet } from 'react-router-dom';
import BtnHostNav from '@components/BtnHostNav';

export default function HostLayout() {
  return (
    <section className="bg-primary-1 pt-8 px-6 pb-14">
      <nav className="mb-11">
        <ul className="flex space-x-5">
          <BtnHostNav link="." navText="dashboard" isEnd />
          <BtnHostNav link="income" navText="income" />
          <BtnHostNav link="vans" navText="vans" />
          <BtnHostNav link="reviews" navText="reviews" />
        </ul>
      </nav>

      <Outlet />
    </section>
  );
}
