export default function notValid(formValue) {
  const values = Object.values({ ...formValue });
  const isNotValid = values.some((value) => !value);

  if (isNotValid) {
    return 'Check input email and password';
  }

  return null;
}
