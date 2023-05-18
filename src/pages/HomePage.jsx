import BtnOrange from '../components/BtnOrange';

export default function HomePage() {
  // bg-hero-menu bg-center bg-no-repeat bg-cover
  return (
    <main className="
    home-hero-img
    text-inter text-white
    px-6 py-16
    md:py-20
    "
    >
      <h1 className="font-extrabold text-4xl mb-6 md:mb-16 max-w-xl mx-auto">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="mb-9 md:mb-14 max-w-md mx-auto">
        {' Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.'}
      </p>
      <BtnOrange name="find your van" />
    </main>
  );
}
