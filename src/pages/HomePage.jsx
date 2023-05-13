export default function HomePage() {
  return (
    <main className="
    bg-hero-menu bg-center bg-no-repeat bg-cover
    text-inter text-white
    px-6 py-16
    "
    >
      <h1 className="font-extrabold text-4xl mb-6">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="mb-9">
        {' Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.'}
      </p>
      <button className="text-white font-semibold bg-orange p-2.5 w-full rounded hover:opacity-80" type="button">Find your van</button>
    </main>
  );
}
