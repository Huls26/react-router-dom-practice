import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HostVansArticle from '@features/HostVansArticle';

export default function MapHostVan({ vansList, isDashboard }) {
  const mapVansList = vansList.map((vans) => {
    const redirectTo = isDashboard ? `vans/${vans.id}` : `${vans.id}`;

    return (
      <Link to={redirectTo} key={vans.id}>
        <HostVansArticle
          img={vans.imageUrl}
          name={vans.name}
          price={vans.price}
          id={vans.id}
        />
      </Link>
    );
  });

  return mapVansList;
}

MapHostVan.proptype = {
  // eslint-disable-next-line react/forbid-prop-types
  vansList: PropTypes.array.isRequired,
  isDashboard: PropTypes.bool,
};
