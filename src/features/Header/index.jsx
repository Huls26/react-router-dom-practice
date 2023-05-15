import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between
    px-6 py-7
    bg-primary-1
    "
    >
      <h1
        className="
              font-inter font-black text-[1.5em] text-black
              hover:text-dark-1
              cursor-pointer"
        id="logo-home"
      >
        <Link to="/">#VANLIFE</Link>
      </h1>

      <nav>
        <ul className="
        font-inter font-semibold text-base text-secondary-1
        flex space-x-6
        "
        >
          <li className="hover:underline hover:underline-offset-4 hover:text-dark-2 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:text-dark-2 cursor-pointer">
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
