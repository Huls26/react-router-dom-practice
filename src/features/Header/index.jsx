export default function Header() {
  return (
    <header className="flex items-center justify-between
    px-6 py-7
    bg-primary-1
    "
    >
      <h1 className="font-inter font-black text-[1.5em] text-black">#VANLIFE</h1>

      <nav>
        <ul className="
        font-inter font-semibold text-base text-secondary-1
        flex space-x-6
        "
        >
          <li>About</li>
          <li>Vans</li>
        </ul>
      </nav>
    </header>
  );
}
