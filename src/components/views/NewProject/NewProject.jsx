import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Heading } from '../../core';
import { View } from '../../core/View/View';
import { NewProjectForm } from '../../forms';
import styles from './NewProject.module.scss'

export const NewProject = () => {

  const initialValueObj = {
    name: '',
    tag: '',
    description: ''
  }

  const [values, setValues] = useState(initialValueObj);
  const [errors, setErrors] = useState(initialValueObj);

  return (
    <View>
      <Heading level='1'>
        New Project
      </Heading>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <NewProjectForm
            values={values}
            errors={errors}
            setValues={setValues}
            setErrors={setErrors}
          />
        </div>
        <div>

        </div>
      </div>
    </View>
  )
}