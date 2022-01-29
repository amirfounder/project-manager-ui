import React, { useState } from 'react';
import { buildCardDTO } from '../../../utils/dtos';
import { useProjectContext } from '../../context/ProjectProvider';
import { TextInput, TextArea, Button } from '../../core';
import { createCard } from './CreateCardFormService';

export const CreateCardForm = () => {
  const {
    createdCardValues, setCreatedCardValues,
    setCards
  } = useProjectContext();

  const [values, setValues] = useState({
    name: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    description: ''
  });

  const [apiError, setApiError] = useState();

  const handleCreateCardClick = () => {
    const cardDTO = buildCardDTO(createdCardValues);
    createCard(cardDTO, setCards, setApiError);
  }

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
      <Button
        label='Create Card'
        onClick={handleCreateCardClick}
      />
    </div>
  )
}