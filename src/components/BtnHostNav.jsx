import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function BtnHostNav({ link, navText }) {
  return (
    <li className="
    font-inter font-medium text-lg text-secondary-1
    hover:underline hover:underline-offset-4 hover:text-dark-2
    cursor-pointer capitalize
    "
    >
      <Link to={link}>{navText}</Link>
    </li>
  );
}

BtnHostNav.propTypes = {
  link: PropTypes.string.isRequired,
  navText: PropTypes.string.isRequired,
};
