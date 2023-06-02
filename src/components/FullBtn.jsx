import PropTypes from 'prop-types';

export default function FullBtn({ text, bg }) {
  const styles = `
    w-full max-w-4xl
    bg-${bg} 
    text-center font-inter font-bold text-lg text-white
    py-2.5
    shadow-btnShadow
    rounded-md
    capitalize
    hover:opacity-80 active:opacity-50
  `;

  return (
    <button type="submit" className={styles}>{text}</button>
  );
}

FullBtn.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
