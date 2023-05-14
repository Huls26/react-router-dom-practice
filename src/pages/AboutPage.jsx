export default function AboutPage() {
  return (
    <section className="bg-primary-1 font-inter text-dark-2 pb-16">
      <div className="bg-img-about bg-center bg-no-repeat bg-cover w-full h-56 mb-12" />
      <div className="px-6 cursor-pointer">
        <h1 className="font-bold text-4xl mb-8">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="font-medium text-base mb-3">
          { 'Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) ' }
        </p>
        <p className="font-medium text-base mb-14">
          { 'Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels. ' }
        </p>
        <article className="bg-article px-9 py-8 rounded">
          <h1 className="font-bold text-2xl mb-6">
            Your destination is waiting.
            Your van is ready.
          </h1>
          <button className="bg-dark-2 px-5 py-3 text-white text-base font-bold rounded-lg" type="button">Explore our vans</button>
        </article>
      </div>
    </section>
  );
}
