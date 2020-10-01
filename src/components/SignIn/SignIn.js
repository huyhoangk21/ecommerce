import React, { useState } from 'react';
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
const SignIn = () => {
  const initialInput = { email: '', password: '' };
  const [inputs, setInputs] = useState(initialInput);
  const { email, password } = inputs;

  const signIn = e => {
    e.preventDefault();

    setInputs(initialInput);
  };

  const changeValue = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={signIn} autoComplete='off'>
        <FormInput
          type='email'
          name='email'
          id='email'
          value={email}
          changeValue={changeValue}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          id='password'
          value={password}
          changeValue={changeValue}
          label='Password'
          required
        />
        <Button type='submit'>Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
