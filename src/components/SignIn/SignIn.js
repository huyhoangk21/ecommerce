import React from 'react';
import './SignIn.styles.scss';

const SignIn = () => {
  const signIn = e => {
    e.preventDefault();
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={signIn}>
        <input type='email' name='email' id='email' required />
        <label htmlFor='email'>Email</label>
        <input type='password' name='password' id='password' required />
        <label htmlFor='password'>Password</label>
        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
};

export default SignIn;
