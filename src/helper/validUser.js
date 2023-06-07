export default function validUser(userRes, path) {
  const { token, user, status } = userRes;

  if (token) {
    console.log(`welcome ${user.name} successful login`);
    localStorage.setItem('loggedIn', true);
    const setPath = path || 'host';
    const p = `/${setPath}`;
    console.log(p);
    return p;
  } if (status > 200) {
    throw new Error('Something went wrong try again?');
  } else {
    throw new Error('No user or check email and password');
  }
}
