export default function notValid(formValue) {
  const values = Object.values({ ...formValue });
  const isNotValid = values.some((value) => !value);

  if (isNotValid) {
    throw new Error('Check input email and password');
  }
}
