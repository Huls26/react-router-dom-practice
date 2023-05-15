import ProductVans from '@features/ProductVans';
import BtnType from '@features/ProductVans/components/BtnType';

export default function VansPage() {
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

      <div>
        <ProductVans
          img="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
          name="modest explorer"
          price="60"
          type="simple"
        />
      </div>
    </section>
  );
}
