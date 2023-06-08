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

export async function loginUser(creds) {
  const res = await fetch(
    '/api/login',
    { method: 'post', body: JSON.stringify(creds) },
  );
  const data = await res.json();

  if (!res.ok) {
    // eslint-disable-next-line no-throw-literal
    return {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
