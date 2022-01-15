import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Button } from '../../core';
import { TextArea } from '../../core/inputs/TextArea/TextArea';
import { TextInput } from '../../core/inputs/TextInput';
import constants from '../../../utils/constants'
import { postProject, validateForm } from './NewProjectFormService';
import { useNavigate } from 'react-router-dom';


export const NewProjectForm = (props) => {
  const {
    values,
    errors,
    setValues,
    setErrors
  } = props;
  
  const navigate = useNavigate()

  const [edittedTagName, setEdittedTagName] = useState(false);
  const [apiError, setApiError] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === 'tag' && !edittedTagName) {
      setEdittedTagName(true);
    }

    setValues((prev) => ({ ...prev, [id]: value }))
  }

  const handleNameInputBlur = (e) => {
    if (!edittedTagName) {
      const { value } = e.target;

      const valueArr = value.split(' ');
      const valueInitialsArr = valueArr.map(x => x[0]);
      const valueInitials = valueInitialsArr.join('');
      const valueInitialsUpper = valueInitials.toUpperCase();
      
      const predicted = valueInitialsUpper;

      setValues((prev) => ({ ...prev, tag: predicted }))
    }
  }

  const handleCreateButtonClick = () => {
    const localErrors = validateForm(values);
    const formIsValid = Object.keys(localErrors).length === 0;

    if (formIsValid) {
      postProject(values, setApiError, navigate)
    } else {
      setErrors(localErrors)
    }
  }

  return (
    <div>
      {apiError && <p>{apiError}</p>}
      <TextInput
        id='name'
        label='Name'
        value={values?.name}
        error={errors?.name}
        onChange={handleInputChange}
        onBlur={handleNameInputBlur}
      />
      <TextInput
        id='tag'
        label='Tag'
        value={values?.tag}
        error={errors?.tag}
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
        label='Create Project'
        onClick={handleCreateButtonClick}
      />
    </div>
  )
}
