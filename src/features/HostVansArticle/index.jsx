import PropTypes from 'prop-types';

export default function HostVansArticle({ img, name, price }) {
  return (
    <article className="bg-white py-4 px-6 flex space-x-4">
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
  );
}

HostVansArticle.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
