import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrow from '@assets/arrow-1.svg';

export default function BackArrow({ link }) {
  return (
    <Link
      to={link}
      relative="path"
    >
      <button className="flex space-x-2 items-center text-base font-medium font-inter text-dark-4 underline underline-offset-2 mb-10 hover:text-gray-1" type="button">
        <div>
          <img src={arrow} alt="arrow" />
        </div>
        <span>Back to all vans</span>
      </button>
    </Link>
  );
}

BackArrow.propTypes = {
  link: PropTypes.string.isRequired,
};
