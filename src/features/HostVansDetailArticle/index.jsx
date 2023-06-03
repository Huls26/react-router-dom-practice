import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';

import BackArrow from '@components/BackArrow';
import BtnTypeStyle from '@components/BtnTypeStyle';
import BtnHostNav from '@components/BtnHostNav';

export default function HostVansDetailArticle({
  type, img, name, price, description, // id,
}) {
  return (
    <section>
      <BackArrow link=".." type="" />
      <article className="bg-white p-6 font-inter text-dark-2">
        <div className="flex items-center space-x-5 mb-6">
          <div className="w-60 h-60">
            <img className="w-full h-full" src={img} alt="vans" />
          </div>

          <div>
            <BtnTypeStyle type={type} />
            <h1 className="font-bold text-3xl mt-4">{name}</h1>
            <h3 className="font-bold text-xl">
              $
              {price}
              <span className="font-medium text-lg">/day</span>
            </h3>
          </div>
        </div>

        <nav className="mb-7">
          <ul className="flex space-x-3 font-extrabold">
            <BtnHostNav link="." navText="details" isEnd />
            <BtnHostNav link="pricing" navText="pricing" />
            <BtnHostNav link="photos" navText="photos" />
          </ul>
        </nav>

        <Outlet context={{
          type, img, name, price, description,
        }}
        />
      </article>
    </section>
  );
}

HostVansDetailArticle.propTypes = {
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};
