import React from 'react';
import './Button.styles.scss';
const Button = ({ children, ...props }) => {
  return (
    <button className='custom-button' {...props}>
      {children}
    </button>
  );
};

export default Button;
