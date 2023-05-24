import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function BtnHostNav({ link, navText }) {
  // eslint-disable-next-line max-len
  // const activeStyle = 'underline underline-offset-4 text-dark-2 cursor-pointer capitalize';
  // eslint-disable-next-line max-len
  // const hoverStyle = 'hover:underline hover:underline-offset-4 hover:text-dark-2 cursor-pointer capitalize';
  const inlineStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    color: '#161616',
    cursor: 'pointer',
  };
  return (
    <li className="font-inter font-semibold text-lg text-secondary-1 capitalize">
      <NavLink
        to={link}
        // className={({ isActive }) => (isActive ? activeStyle : hoverStyle)}
        end
        style={({ isActive }) => (isActive ? inlineStyle : null)}
      >
        {navText}

      </NavLink>
    </li>
  );
}

BtnHostNav.propTypes = {
  link: PropTypes.string.isRequired,
  navText: PropTypes.string.isRequired,
};
