import '../server';

export async function getVans() {
  const res = await fetch('/api/vans');
  const { vans } = await res.json();

  return vans;
}

export async function getHostVans() {
  const res = await fetch('/api/host/vans');
  const { vans } = await res.json();

  return vans;
}

export async function getHostVansDetail(id) {
  const res = await fetch(`/api/host/vans/${id}`);
  const { vans } = await res.json();

  return vans;
}
