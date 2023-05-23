import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductVans from '@features/ProductVans';
import BtnType from '@features/ProductVans/components/BtnType';

import '../server';

export default function VansPage() {
  const [vansList, setVansList] = useState(() => []);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then(({ vans }) => setVansList(() => [...vans]));
  }, []);

  const productList = vansList.map(({
    imageUrl, name, price, type, id,
  }) => (
    <Link to={`/vans/${id}`} key={id}>
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
    <section className="font-inter bg-primary-1 px-6 pt-14 pb-20">
      <h1 className="font-bold text-3xl mb-6">Explore our van options</h1>

      <div className="flex justify-between mb-14">
        <ul className="space-x-4">
          <BtnType type="simple" />
          <BtnType type="luxury" />
          <BtnType type="rugged" />
        </ul>
        <button className="font-medium text-base text-dark-3 underline underline-offset-4" type="button">Clear filters</button>
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
