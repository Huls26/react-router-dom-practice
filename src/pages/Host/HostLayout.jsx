import { Link, Outlet } from 'react-router-dom';

export default function HostLayout() {
  return (
    <section>
      <nav>
        <ul>
          <li><Link to="/host">Dashboard</Link></li>
          <li><Link to="/host/income">Income</Link></li>
          <li><Link to="/host/reviews">Reviews</Link></li>
        </ul>
        fix css style
      </nav>

      <Outlet />
    </section>
  );
}
