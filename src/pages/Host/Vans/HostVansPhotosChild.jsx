import { useOutletContext } from 'react-router-dom';

export default function HostVansPhotosChild() {
  const {
    img,
  } = useOutletContext();

  return (
    img ? (
      <div>
        <img src={img} alt="van" width="150px" />
      </div>
    ) : <h1 className="font-bold text-3xl text-center mt-4">...Loading</h1>
  );
}
