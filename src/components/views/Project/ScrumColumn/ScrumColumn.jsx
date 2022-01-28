import React from 'react'
import { isArray } from '../../../../utils/utils';
import { Heading, Line } from '../../../core';
import { ScrumCard } from '../ScrumCard';
import styles from './ScrumColumn.module.scss'

export const ScrumColumn = (props) => {
  const {
    column,
    cards,
    children
  } = props;

  return (
    <div className={styles.main}>
      <Heading level='3'>{column?.name}</Heading>
      <Line />
      <div>
        {isArray(cards) && cards.map((card) => (
          <ScrumCard
            card={card}
          />
        ))}
      </div>
    </div>
  )
}