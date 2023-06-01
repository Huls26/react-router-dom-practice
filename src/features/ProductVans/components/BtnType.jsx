import PropTypes from 'prop-types';

export default function BtnType({ type, callback, active }) {
  let hoverStyle = '';
  let activeBg = '';

  if (type.toLowerCase() === 'simple') {
    hoverStyle = 'hover:bg-simpleBg';
    activeBg = active === 'simple' ? 'bg-simpleBg text-white' : '';
  } else if (type.toLowerCase() === 'luxury') {
    hoverStyle = 'hover:bg-dark-2';
    activeBg = active === 'luxury' ? 'bg-dark-2 text-white' : '';
  } else {
    hoverStyle = 'hover:bg-ruggedBg';
    activeBg = active === 'rugged' ? 'bg-ruggedBg text-white' : '';
  }
  // const inlineStyle = {
  //   backgroundColor: '#E17654',
  //   color: '#FFFFFF',
  // };

  const styles = `
                  bg-btnBg
                  text-dark-3 font-inter text-base font-medium
                  py-1.5 px-6
                  capitalize rounded-md shadow
                  hover:text-btnBg ${hoverStyle} ${activeBg}
              `;
  return (
    <button
      className={styles}
      type="button"
      onClick={callback}
    >
      {type}
    </button>
  );
}

BtnType.propTypes = {
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  callback: PropTypes.func,
  active: PropTypes.string.isRequired,
};
