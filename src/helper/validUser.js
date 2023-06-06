export default function validUser(userRes) {
  const { token, user, status } = userRes;

  if (token) {
    console.log(`welcome ${user.name} successful login`);
    return;
  }
  if (status > 200) {
    throw new Error('Something went wrong try again?');
  }

  throw new Error('No user or check email and password');
}
