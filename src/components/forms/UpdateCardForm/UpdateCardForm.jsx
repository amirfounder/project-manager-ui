import React, { useState } from 'react';
import { TextInput, TextArea, Button } from '../../core';

export const UpdateCardForm = () => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues((prevState) => ({ ...prevState, [id]: value }))
  }

  return (
    <div>
      {/* {apiError && <p>{apiError}</p>} */}
      <TextInput
        id='name'
        label='Name'
        value={values?.name}
        error={errors?.name}
        onChange={handleInputChange}
      />
      <TextArea
        id='description'
        label='Description'
        value={values?.description}
        error={errors?.description}
        onChange={handleInputChange}
      />
    </div>
  )
}