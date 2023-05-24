import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HostVansArticle({
  img, name, price, id,
}) {
  return (
    <Link to={`/host/vans/${id}`}>
      <article className="
          bg-white py-4 px-6
            flex space-x-4
            rounded-md cursor-pointer select-none
            hover:outline outline-dark-3
            active:opacity-70
          "
      >
        <div className="w-16 h-16">
          <img className="w-full h-full" src={img} alt="vans" />
        </div>
        <div>
          <h1 className="font-semibold text-xl capitalize">{name}</h1>
          <h3>
            $
            {price}
            {' '}
            <span className="font-medium text-base text-dark-3">/day</span>
          </h3>
        </div>
      </article>
    </Link>
  );
}

HostVansArticle.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
