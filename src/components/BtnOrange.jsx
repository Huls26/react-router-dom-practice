import PropTypes from 'prop-types';

export default function BtnOrange({ name }) {
  return (
    <button className="block text-white font-semibold bg-orange p-2.5 w-full max-w-md md:m-auto rounded hover:opacity-80 capitalize" type="button">{name}</button>
  );
}

BtnOrange.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  name: PropTypes.object.isRequired,
};
