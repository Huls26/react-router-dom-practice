import { NavLink } from 'react-router-dom';
import icon from '@assets/icon.svg';

export default function Header() {
  const activeStyle = 'underline underline-offset-4 text-dark-2 cursor-pointer';
  const hoverStyle = 'hover:underline hover:underline-offset-4 hover:text-dark-2 cursor-pointer';
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
        <NavLink to="/">#VANLIFE</NavLink>
      </h1>

      <nav>
        <ul className="
        font-inter font-semibold text-base text-secondary-1
        flex space-x-6
        "
        >
          <li>
            <NavLink
              to="/host"
              className={
                ({ isActive }) => (isActive ? activeStyle : hoverStyle)
              }
            >
              Host

            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={
                ({ isActive }) => (isActive ? activeStyle : hoverStyle)
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vans"
              className={
                ({ isActive }) => (isActive ? activeStyle : hoverStyle)
              }
            >
              Vans
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={
                ({ isActive }) => (isActive ? activeStyle : hoverStyle)
              }
            >
              <img src={icon} alt="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              // className={
              //   ({ isActive }) => (isActive ? activeStyle : hoverStyle)
              // }
              className={hoverStyle}
              onClick={() => localStorage.clear()}
            >
              logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
