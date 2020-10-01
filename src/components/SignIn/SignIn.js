import React, { useState } from 'react';
import './SignIn.styles.scss';

const SignIn = () => {
  const initialInput = { email: '', password: '' };
  const [{ email, password }, setInput] = useState(initialInput);

  const signIn = e => {
    e.preventDefault();

    setInput(initialInput);
  };

  const changeValue = e => {
    const { name, value } = e.target;
    setInput({ [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={signIn}>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={changeValue}
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={changeValue}
          required
        />
        <label htmlFor='password'>Password</label>
        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
};

export default SignIn;
