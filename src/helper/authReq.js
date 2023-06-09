export default async function authReq(request) {
  const isLoggedIn = localStorage.getItem('loggedIn');

  if (!isLoggedIn) {
    const { pathname } = new URL(request.url);

    return pathname;
  }

  return !isLoggedIn;
}
