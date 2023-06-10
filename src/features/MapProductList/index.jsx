import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';

import ProductVans from '@features/ProductVans';

export default function MapProductList({ data }) {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const filterProduct = typeFilter ? [...data]
    .filter((van) => (van.type.toLowerCase() === typeFilter))
    : [...data];

  const productList = filterProduct.map(({
    imageUrl, name, price, type, id,
  }) => (
    <Link
      to={`${id}`}
      key={id}
      state={{
        search: searchParams.toString(),
        type: typeFilter,
      }}
    >
      <ProductVans
        img={imageUrl}
        name={name}
        price={price}
        type={type}
        id={id}
      />
    </Link>

  ));
  return (
    <div className="grid md:grid-cols-[230px_230px] lg:grid-cols-[230px_230px_230px] xl:grid-cols-[230px_230px_230px_230px] justify-center gap-8">
      {productList}
    </div>
  );
}

MapProductList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  // typeFilter: PropTypes.string.isRequired,
  // // eslint-disable-next-line react/forbid-prop-types
  // searchParams: PropTypes.object.isRequired,

};
