import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Heading } from '../../core';
import { View } from '../../core/View/View';
import { NewProjectForm } from '../../forms';
import styles from './NewProject.module.scss'

export const NewProject = () => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

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