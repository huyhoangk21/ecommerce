import React, { useState } from 'react';
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { signInWithGoogle } from '../../firebase/firebase';

const SignIn = () => {
  const initialInput = { email: '', password: '' };
  const [input, setInput] = useState(initialInput);
  const { email, password } = input;

  const signIn = e => {
    e.preventDefault();

    setInput(initialInput);
  };

  const changeValue = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
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
          onChange={changeValue}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={changeValue}
          label='Password'
          required
        />
        <div className='buttons'>
          <Button type='submit'>Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
