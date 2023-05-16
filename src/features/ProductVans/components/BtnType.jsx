import PropTypes from 'prop-types';

export default function BtnType({ type }) {
  let hoverStyle = '';

  if (type.toLowerCase() === 'simple') {
    hoverStyle = 'hover:bg-simpleBg';
  } else if (type.toLowerCase() === 'luxury') {
    hoverStyle = 'hover:bg-dark-2';
  } else {
    hoverStyle = 'hover:bg-ruggedBg';
  }

  const styles = `
                  bg-btnBg
                  text-dark-3 font-inter text-base font-medium
                  py-1.5 px-6
                  capitalize rounded-md shadow
                  hover:text-btnBg ${hoverStyle}
              `;
  return (
    <button
      className={styles}
      type="button"
    >
      {type}
    </button>
  );
}

BtnType.propTypes = {
  type: PropTypes.string.isRequired,
};
