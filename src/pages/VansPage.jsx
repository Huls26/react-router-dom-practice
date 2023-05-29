import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductVans from '@features/ProductVans';
import BtnType from '@features/ProductVans/components/BtnType';

import '../server';

export default function VansPage() {
  const [vansList, setVansList] = useState(() => []);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then(({ vans }) => setVansList(() => [...vans]));
  }, []);

  const filterProduct = typeFilter ? vansList
    .filter((van) => (van.type.toLowerCase() === typeFilter))
    : vansList;

  const productList = filterProduct.map(({
    imageUrl, name, price, type, id,
  }) => (
    <Link to={`${id}`} key={id}>
      <ProductVans
        img={imageUrl}
        name={name}
        price={price}
        type={type}
        id={id}
      />
    </Link>

  ));

  function handleSearchParams(key, value) {
    setSearchParams((prevParams) => {
      if (value) {
        const setParams = {};

        prevParams.forEach((v, k) => {
          setParams[k] = v;
        });

        setParams[key] = value;

        return setParams;
      }

      // if (value) {
      //   prevParams.append(key, value);
      //   return prevParams;
      // }

      prevParams.delete(key);
      return prevParams;
    });
  }

  return (
    <section className="font-inter bg-primary-1 px-6 pt-14 pb-20">
      <h1 className="font-bold text-3xl mb-6">Explore our van options</h1>

      <div className="flex justify-between mb-14">
        <ul className="space-x-4">
          <BtnType
            type="simple"
            callback={() => handleSearchParams('type', 'simple')}
            active={typeFilter || 'none'}
          />
          <BtnType
            type="luxury"
            callback={() => handleSearchParams('type', 'luxury')}
            active={typeFilter || 'none'}
          />
          <BtnType
            type="rugged"
            callback={() => handleSearchParams('type', 'rugged')}
            active={typeFilter || 'none'}
          />
        </ul>

        {
          typeFilter
            ? <button onClick={() => handleSearchParams('type', null)} className="font-medium text-base text-dark-3 underline underline-offset-4" type="button">Clear filters</button>
            : null
        }

      </div>

      {
      // flex justify-center flex-wrap gap-8
      }
      <div className="grid md:grid-cols-[230px_230px] lg:grid-cols-[230px_230px_230px] xl:grid-cols-[230px_230px_230px_230px] justify-center gap-8">
        {productList}
      </div>

    </section>
  );
}
