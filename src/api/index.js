import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from 'firebase/firestore';
import db from './firebaseAPI';

// import '../server';

export async function getVans() {
  const querySnapshot = await getDocs(collection(db, 'vans'));
  const vans = querySnapshot.docs.map((document) => document.data());

  return vans;
}

// export async function getVans() {
//   const res = await fetch('/api/vans');
//   const errorD = {
//     message: 'Failed to fetch vans',
//     statusText: res.statusText,
//     status: res.status,
//   };
//   if (!res.ok) {
//     throw errorD;
//   }
//   const { vans } = await res.json();

//   return vans;
// }

export async function getVanDetails(id) {
  const docRef = doc(db, 'vans', id);
  const vanSnapshot = await getDoc(docRef);

  if (vanSnapshot.exists()) {
    return vanSnapshot.data();
  }

  throw new Error('something went wrong');
}

// export async function getVanDetails(id) {
//   const url = `/api/vans/${id}`;
//   const res = await fetch(url);
//   const errorD = {
//     message: 'Failed to fetch vans',
//     statusText: res.statusText,
//     status: res.status,
//   };
//   if (!res.ok) {
//     throw errorD;
//   }
//   const { vans } = await res.json();

//   return vans;
// }

export async function getHostVans() {
  const cln = collection(db, 'vans');
  const queryCollection = query(cln, where('hostId', '==', '123'));
  const querySnapshot = await getDocs(queryCollection);
  const vans = querySnapshot.docs.map((document) => document.data());

  return vans;
}

export async function getHostVansDetail(id) {
  const vans = getVanDetails(id);

  return vans;
}

// export async function getHostVansDetail(id) {
//   const res = await fetch(`/api/host/vans/${id}`);
//   const errorD = {
//     message: 'Failed to fetch vans',
//     statusText: res.statusText,
//     status: res.status,
//   };
//   if (!res.ok) {
//     throw errorD;
//   }
//   const { vans } = await res.json();

//   return vans;
// }

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
