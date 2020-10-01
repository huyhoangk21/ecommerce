import { useState } from 'react';

const useForm = ({ ...input }) => {
  const [values, setValues] = useState({ ...input });

  const changeValues = e => {
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  return [values, changeValues];
};

export default useForm;
