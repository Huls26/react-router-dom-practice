import PropTypes from 'prop-types';

export default function ProductVans({
  img, name, price, type,
}) {
  let btnStyleBg = '';

  if (type.toLowerCase() === 'simple') {
    btnStyleBg = 'bg-simpleBg';
  } else if (type.toLowerCase() === 'luxury') {
    btnStyleBg = 'bg-dark-2';
  } else {
    btnStyleBg = 'bg-ruggedBg';
  }

  const btnStyles = `
                  ont-inter text-base font-medium
                  py-1.5 px-6
                  capitalize rounded-md shadow
                  text-btnBg ${btnStyleBg}
                  hover:opacity-80
              `;
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
        className={btnStyles}
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
