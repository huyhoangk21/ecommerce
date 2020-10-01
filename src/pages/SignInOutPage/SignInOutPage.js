import React from 'react';

import './SignInOutPage.styles.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInOutPage = () => {
  return (
    <div className='sign-in-out'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInOutPage;
