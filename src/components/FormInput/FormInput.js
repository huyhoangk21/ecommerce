import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ onChange, label, id, ...props }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={onChange} {...props} />
      {label && (
        <label
          htmlFor={id}
          className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
