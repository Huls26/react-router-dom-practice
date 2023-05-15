import PropTypes from 'prop-types';

export default function BtnType({ type }) {
  return (
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
  );
}

BtnType.propTypes = {
  type: PropTypes.string.isRequired,
};
