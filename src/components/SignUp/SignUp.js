import React, { useState } from 'react';
import './SignUp.styles.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase';

const SignUp = () => {
  const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [input, setInput] = useState(initialState);
  const { displayName, email, password, confirmPassword } = input;

  const signUp = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user, displayName);
    setInput(initialState);

    try {
    } catch (error) {
      console.error(error);
    }
  };

  const changeValue = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={signUp} autoComplete='off'>
        <FormInput
          type='text'
          name='displayName'
          id='displayName'
          label='Display Name'
          value={displayName}
          onChange={changeValue}
          required
        />
        <FormInput
          type='email'
          name='email'
          id='email'
          label='Email'
          value={email}
          onChange={changeValue}
          required
        />
        <FormInput
          type='password'
          name='password'
          id='password'
          label='Password'
          value={password}
          onChange={changeValue}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          onChange={changeValue}
          required
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
