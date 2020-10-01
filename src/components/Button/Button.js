import React from 'react';
import './Button.styles.scss';
const Button = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
