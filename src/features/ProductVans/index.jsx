import PropTypes from 'prop-types';

export default function ProductVans({
  img, name, price, type,
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

      <button
        className="
          bg-btnBg
          text-dark-3 font-inter text-base font-medium
          py-1.5 px-6
          capitalize rounded-md shadow
        "
        type="button"
      >
        {type}

      </button>
    </article>
  );
}

ProductVans.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
