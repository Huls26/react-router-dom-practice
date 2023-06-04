import { useState } from 'react';

import FullBtn from '@components/FullBtn';

export default function LoginPage() {
  const [formValue, setFormValue] = useState(() => ({ email: '', password: '' }));

  function handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    setFormValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('login');
  }

  return (
    <main
      className="
      bg-primary-1
        px-6 pt-14 pb-20
        flex flex-col items-center
        font-inter
      "
    >
      <h1 className="font-bold text-3xl text-dark-2 mb-12">Sign in to your account</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-[40em] mb-5">
        <input
          type="text"
          placeholder="Email address"
          className="w-full p-2 focus:border rounded-md shadow-btnShadow outline-none mb-1"
          name="email"
          onChange={handleInputChange}
          value={formValue.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 focus:border rounded-md shadow-btnShadow outline-none mb-8"
          name="password"
          onChange={handleInputChange}
          value={formValue.password}
          autoComplete="on"
        />
        <FullBtn bg="orange" text="sign in" />
      </form>

      <h3>
        Don’t have an account?
        {' '}
        <span className="text-orange">Create one now</span>
      </h3>
    </main>
  );
}
