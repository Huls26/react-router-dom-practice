import '../server';

export async function getVans() {
  const res = await fetch('/api/vans');
  const { vans } = await res.json();

  return vans;
}

export async function fetchSomething() {
  return 'return something';
}
