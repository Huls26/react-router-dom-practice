import { useEffect } from 'react';
import {
  Form, useActionData, useLoaderData, useNavigate, useNavigation,
} from 'react-router-dom';

import { loginUser } from '@api';

import FullBtn from '@components/FullBtn';
import notValid from '@helper/notValid';
import validUser from '@helper/validUser';

import '../server';

export async function loader({ request }) {
  const url = new URL(request.url);
  const message = url.searchParams.get('message');

  return message;
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const url = new URL(request.url);
  const params = url.searchParams.get('redirectTo');

  const values = { email, password };
  const isNotValid = await notValid(values);

  if (!isNotValid) {
    const user = await loginUser(values);
    const { path, error } = await validUser(user, params);

    return { path, error };
  }

  return { path: null, error: isNotValid };
}

export default function LoginPage() {
  const message = useLoaderData();
  const actionData = useActionData();
  const { path, error } = { ...actionData };
  const navigate = useNavigate();
  const { state } = useNavigation();
  const btnLoginLoading = state !== 'idle' ? 'Logging in...' : 'Login';

  // eslint-disable-next-line no-unused-vars
  // const [status, setStatus] = useState(() => 'idle');
  // eslint-disable-next-line no-unused-vars
  // const [error, setError] = useState(() => null);
  // const isDisable = status === 'idle';

  console.log(path);
  useEffect(() => {
    if (path) {
      navigate(path, { replace: true });
    }
  }, [path, navigate]);

  // function handleInputChange(event) {
  //   const { target } = event;
  //   const { value } = target;
  //   const { name } = target;

  //   setFormValue((prevValue) => ({
  //     ...prevValue,
  //     [name]: value,
  //   }));
  // }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   setError(() => null);
  //   setStatus(() => 'submitting');

  //   try {
  //     const values = { ...formValue };
  //     await notValid(values);
  //     const user = await loginUser(values);
  //     await validUser(user);
  //     navigate('/', { replace: true });
  //   } catch (e) {
  //     setError(() => e.message);
  //   } finally {
  //     setTimeout(() => {
  //       // console.log('running');
  //       setStatus(() => 'idle');
  //     }, 3000);
  //   }
  // }

  return (
    <main
      className="
      bg-primary-1
        px-6 pt-14 pb-20
        flex flex-col items-center
        font-inter
      "
    >
      { message && (
      <h2 className="text-lg font-bold text-purple
       mb-4"
      >
        {message}
      </h2>
      )}

      <h1 className="font-bold text-3xl text-dark-2 mb-12">Sign in to your account</h1>

      { error && (
      <h2 className="text-lg font-bold text-orange
       mb-4"
      >
        {error}
      </h2>
      )}

      <Form
        method="post"
        // onSubmit={handleSubmit}
        className="w-full max-w-[40em] mb-5"
      >
        <input
          type="text"
          placeholder="Email address"
          className="w-full p-2 focus:border rounded-md shadow-btnShadow outline-none mb-1"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 focus:border rounded-md shadow-btnShadow outline-none mb-8"
          name="password"
          autoComplete="on"
        />
        <FullBtn
          bg="orange"
          text={btnLoginLoading}
          isDisable={(state !== 'idle')}
        />
      </Form>

      <h3>
        Don’t have an account?
        {' '}
        <span className="text-orange">Create one now</span>
      </h3>
    </main>
  );
}
