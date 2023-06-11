import PropTypes from 'prop-types';
import HostVansArticle from '@features/HostVansArticle';

export default function MapHostVan({ vansList }) {
  const mapVansList = vansList.map((vans) => (
    <HostVansArticle
      // eslint-disable-next-line react/no-array-index-key
      key={vans.id}
      img={vans.imageUrl}
      name={vans.name}
      price={vans.price}
      id={vans.id}
    />
  ));
  return mapVansList;
}

MapHostVan.proptype = {
  // eslint-disable-next-line react/forbid-prop-types
  vansList: PropTypes.array.isRequired,
};
