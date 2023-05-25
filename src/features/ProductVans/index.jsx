// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnTypeStyle from '@components/BtnTypeStyle';

export default function ProductVans({
  img, name, price, type, // id,
}) {
  return (
    <article className="font-inter text-dark-2 md:w-56">
      <div className="w-full h-[350px] md:h-56 mb-2.5 rounded shadow-lg">
        <img className="h-full w-full rounded" src={img} alt="vans" />
      </div>

      <div className="flex justify-between items-center font-semibold text-xl -mb-2">
        <h3 className="capitalize">{name}</h3>
        <h3>
          $
          {price}

        </h3>
      </div>
      <span className="block text-right font-sm">/day</span>

      <BtnTypeStyle type={type} />
    </article>
  );
}

ProductVans.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};
