export default function validUser(userRes, path) {
  const { token, user, status } = userRes;

  // instead of returning the error message
  // i think i could just put it in the search params
  // then get the message i think its more efficient that way
  if (token) {
    console.log(`welcome ${user.name} successful login`);
    localStorage.setItem('loggedIn', true);
    const setPath = path || 'host';
    const p = `/${setPath}`;

    return { path: p, error: null };
  } if (status > 200) {
    return { path: null, error: 'Something went wrong try again?' };
  }
  return { path: null, error: 'No user or check email and password' };
}
