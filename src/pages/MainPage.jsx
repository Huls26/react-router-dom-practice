import { Outlet } from 'react-router-dom';

import Header from '@features/Header';
import Footer from '@features/Footer';

export default function MainPage() {
  return (
    <div className="min-w-[490px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
