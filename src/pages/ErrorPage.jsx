import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="bg-white py-8 flex space-y-6 flex-col items-center">
      <h1 className="font-bold text-3xl">Oops!</h1>

      <p className="text-dark-2">Sorry, an unexpected error has occured.</p>

      <p className="text-gray-1"><i>Not Found!</i></p>

      <Link to="/">Return to Home</Link>
    </div>
  );
}
