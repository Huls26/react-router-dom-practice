import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import BtnTypeStyle from '@components/BtnTypeStyle';
import BtnOrange from '@components/BtnOrange';
import BackArrow from '@components/BackArrow';

export default function VanDetails({ info }) {
  const {
    imageUrl, type, price, name, description,
  } = info;
  const { state } = useLocation();
  const linkTo = state.search ? `..?${state.search}` : '..';

  return (
    <section className="bg-white px-6 pt-10 pb-20">
      <BackArrow link={linkTo} type={state.type || ''} />

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
