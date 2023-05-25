import { useOutletContext } from 'react-router-dom';

export default function HostVansPricingChild() {
  const {
    price,
  } = useOutletContext();

  return (
    price ? (
      <h1>
        $
        {price}
        <span>/day</span>
      </h1>
    ) : <h1 className="font-bold text-3xl text-center mt-4">...Loading</h1>
  );
}
