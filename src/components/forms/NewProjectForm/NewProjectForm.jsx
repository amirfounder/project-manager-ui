import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Button } from '../../core';
import { TextArea } from '../../core/inputs/TextArea/TextArea';
import { TextInput } from '../../core/inputs/TextInput';
import constants from '../../../utils/constants'
import styles from './NewProjectForm.module.scss';


export const NewProjectForm = (props) => {
  const {
    values,
    errors,
    setValues,
    setErrors
  } = props;
  
  const [edittedTagName, setEdittedTagName] = useState(false);

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
      const valueInitialsFiltered = valueInitialsArr.filter(x => constants.ALPHABET_UPPER.includes(x));
      const valueInitials = valueInitialsFiltered.join('');
      const valueInitialsUpper = valueInitials.toUpperCase();
      
      const predicted = valueInitialsUpper;

      setValues((prev) => ({ ...prev, tag: predicted }))
    }
  }

  return (
    <div>
      <TextInput
        id='name'
        label='Name'
        value={values?.name}
        onChange={handleInputChange}
        onBlur={handleNameInputBlur}
      />
      <TextInput
        id='tag'
        label='Tag'
        value={values?.tag}
        onChange={handleInputChange}
      />
      <TextArea
        id='description'
        label='Description'
        value={values?.description}
        onChange={handleInputChange}
      />
      <Button
        label='Create Project'
      />
    </div>
  )
}
