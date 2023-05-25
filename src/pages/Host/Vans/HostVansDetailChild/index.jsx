import { useOutletContext } from 'react-router-dom';

import ArticleDetails from './components/ArticleDetails';

export default function HostVansDetailChild() {
  const {
    type, name, description,
  } = useOutletContext();

  return (
    type ? (
      <ArticleDetails
        name={name}
        type={type}
        description={description}
      />
    ) : <h1 className="font-bold text-3xl text-center mt-4">...Loading</h1>
  );
}
