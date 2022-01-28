import React from 'react'
import { Heading } from '../../../core';
import styles from './ScrumCard.module.scss'

export const ScrumCard = (props) => {
  const {
    card,
  } = props;

  return (
    <div className={styles.main}>
      <Heading level='4'>
        {card?.name}
      </Heading>
      <div>{card?.description}</div>
    </div>
  )
}