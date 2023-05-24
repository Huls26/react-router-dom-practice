import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Navlinks({ id, name }) {
  return (
    <NavLink
      className="font-inter"
      to={`/host/vans/${id}/${name}`}
    >
      {name}
    </NavLink>
  );
}

Navlinks.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
