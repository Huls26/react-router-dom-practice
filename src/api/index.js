import '../server';

export async function getVans() {
  const res = await fetch('/api/vans');
  const errorD = {
    message: 'Failed to fetch vans',
    statusText: res.statusText,
    status: res.status,
  };
  if (!res.ok) {
    throw errorD;
  }
  const { vans } = await res.json();

  return vans;
}

export async function getVanDetails(id) {
  const url = `/api/vans/${id}`;
  const res = await fetch(url);
  const errorD = {
    message: 'Failed to fetch vans',
    statusText: res.statusText,
    status: res.status,
  };
  if (!res.ok) {
    throw errorD;
  }
  const { vans } = await res.json();

  return vans;
}

export async function getHostVans() {
  const res = await fetch('/api/host/vans');
  const errorD = {
    message: 'Failed to fetch vans',
    statusText: res.statusText,
    status: res.status,
  };
  if (!res.ok) {
    throw errorD;
  }
  const { vans } = await res.json();

  return vans;
}

export async function getHostVansDetail(id) {
  const res = await fetch(`/api/host/vans/${id}`);
  const errorD = {
    message: 'Failed to fetch vans',
    statusText: res.statusText,
    status: res.status,
  };
  if (!res.ok) {
    throw errorD;
  }
  const { vans } = await res.json();

  return vans;
}

export async function loginUser(creds) {
  const res = await fetch(
    '/api/login',
    { method: 'post', body: JSON.stringify(creds) },
  );
  const errorD = {
    message: 'Failed to fetch vans',
    statusText: res.statusText,
    status: res.status,
  };
  if (!res.ok) {
    throw errorD;
  }
  const data = await res.json();

  return data;
}
