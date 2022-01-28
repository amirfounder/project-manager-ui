import React from 'react'
import { isArray } from '../../../../utils/utils';
import { Heading, Line, PlusIcon } from '../../../core';
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
      <div className={styles.header}>
        <Heading ignoreMargin level='3'>{column?.name}</Heading>
        <PlusIcon className={styles.icon} />
      </div>
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