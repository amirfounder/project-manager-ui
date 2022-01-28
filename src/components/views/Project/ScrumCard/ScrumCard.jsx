import React from 'react'
import { useState } from 'react/cjs/react.development';
import { Heading, TextInput } from '../../../core';
import { EdittableScrumCard } from '../EdittableScrumCard';
import { NonEdittableScrumCard } from '../NonEdittableScrumCard';
import styles from './ScrumCard.module.scss'

export const ScrumCard = (props) => {
  const {
    card: {
      isInEditMode
    }
  } = props;
  return (
    <div className={styles.main}>
      {isInEditMode
        ? <EdittableScrumCard {...props} />
        : <NonEdittableScrumCard {...props} />
      }
    </div>
  )
}