export default async function authReq() {
  const isLoggedIn = localStorage.getItem('loggedIn');

  return isLoggedIn;
}
