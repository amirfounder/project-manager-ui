import React from 'react'
import { useState } from 'react/cjs/react.development';
import { isArray } from '../../../../utils/utils';
import { Heading, Line, PlusIcon } from '../../../core';
import { ScrumCard } from '../ScrumCard';
import styles from './ScrumColumn.module.scss'
import { createCard } from './ScrumColumnService';

export const ScrumColumn = (props) => {
  const {
    column,
    cards,
    setShowModal
  } = props;

  const handlePlusIconClick = () => { setShowModal(true); }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Heading ignoreMargin level='3'>{column?.name}</Heading>
        <PlusIcon
          className={styles.icon}
          onClick={handlePlusIconClick}
        />
      </div>
      <Line />
      <div style={{
        display: 'grid',
        gridTemplateRows: 'auto',
        rowGap: '.8rem'
      }}>
        {isArray(cards) && cards.map((card) => (
          <ScrumCard
            card={card}
          />
        ))}
      </div>
    </div>
  )
}