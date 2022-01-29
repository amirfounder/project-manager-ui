import React from 'react'
import { isArray } from '../../../../utils/utils';
import { useProjectContext } from '../../../context/ProjectProvider';
import { Heading, Line, PlusIcon } from '../../../core';
import { ScrumCard } from '../ScrumCard';
import styles from './ScrumColumn.module.scss'

export const ScrumColumn = (props) => {
  const {
    column,
    cards,
  } = props;

  const {
    setIsCreatingCard,
    isUpdatingCard,
    setCreatedCardValues
  } = useProjectContext()

  const handleCreateCardClick = () => {
    if (!isUpdatingCard) {
      setIsCreatingCard(true);
      setCreatedCardValues((prevState) => ({
        ...prevState,
        columnId: column.id,
        order: 0
      }));
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Heading ignoreMargin level='3'>{column?.name}</Heading>
        <PlusIcon
          className={styles.icon}
          onClick={handleCreateCardClick}
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
            key={card.id}
            card={card}
          />
        ))}
      </div>
    </div>
  )
}