import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrow from '@assets/arrow-1.svg';

import BtnTypeStyle from '@components/btnTypeStyle';
import BtnOrange from '../../components/BtnOrange';

export default function VanDetails({ info }) {
  const {
    imageUrl, type, price, name, description,
  } = info;

  return (
    <section className="bg-white px-6 pt-10 pb-20">
      <Link to="/vans">
        <button className="flex space-x-2 items-center text-base font-medium font-inter text-dark-4 underline underline-offset-2 mb-10 hover:text-gray-1" type="button">
          <div>
            <img src={arrow} alt="arrow" />
          </div>
          <span>Back to all vans</span>
        </button>
      </Link>

      <div className="flex flex-col md:flex-row md:space-x-7">
        <div className="w-full h-1/2 mb-12 rounded md:basis-1/2">
          <img className="h-full w-full rounded" src={imageUrl} alt="van" />
        </div>

        <div className="font-inter text-dark-2 font-medium md:basis-1/2">
          <BtnTypeStyle type={type} />
          <h1 className="mt-5 mb-3 font-bold text-3xl">{name}</h1>
          <h1 className="mb-3 font-bold text-2xl">
            $
            {price}
            {' '}
            <span className="text-xl">/day</span>
          </h1>
          <p className="mb-5 text-base">{description}</p>
          <BtnOrange name="rent this van" />
        </div>
      </div>
    </section>
  );
}

VanDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired,
};
