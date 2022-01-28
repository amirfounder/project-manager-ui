import React from 'react';
import { Heading } from '../../../core';
import styles from './NonEdittableScrumCard.module.scss';

export const NonEdittableScrumCard = (props) => {
  const {
    card
  } = props;
  
  return (
    <div className={styles.main}>
      <Heading
        level='4'
      >
        {card?.name}
      </Heading>
      <div>{card?.description}</div>
    </div>
  )
}