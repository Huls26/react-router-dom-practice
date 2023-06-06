import PropTypes from 'prop-types';

export default function FullBtn({ text, bg, isDisable = true }) {
  const disableStyle = isDisable ? 'opacity-50' : 'hover:opacity-80';

  const styles = `
    w-full max-w-4xl
    bg-${bg} 
    text-center font-inter font-bold text-lg text-white
    py-2.5
    shadow-btnShadow
    rounded-md
    capitalize
    active:opacity-50
    ${disableStyle}
  `;

  return (
    <button
      type="submit"
      className={styles}
      disabled={isDisable}
    >
      {text}

    </button>
  );
}

FullBtn.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  isDisable: PropTypes.bool,
};
