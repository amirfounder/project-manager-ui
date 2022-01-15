import React from 'react';
import { Button } from '../../core';
import { TextArea } from '../../core/inputs/TextArea/TextArea';
import { TextInput } from '../../core/inputs/TextInput';
import styles from './NewProjectForm.module.scss';


export const NewProjectForm = (props) => {
  
  return (
    <div>
      <TextInput
        id='name'
        label='Name'
      />
      <TextArea
        id='technologies'
        label='Technology Stacks'
        rows={3}
      />
      <TextArea
        id='description'
        label='Description'
      />
      <Button
        label='Create Project'
      />
    </div>
  )
}
