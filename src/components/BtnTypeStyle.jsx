import PropTypes from 'prop-types';

export default function BtnTypeStyle({ type }) {
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
    <button className={btnStyles} type="button">{type}</button>
  );
}

BtnTypeStyle.propTypes = {
  type: PropTypes.string.isRequired,
};
