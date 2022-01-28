import React, { useEffect, useState } from 'react';
import styles from './Project.module.scss';
import { useParams } from 'react-router-dom';
import { Heading, Paragraph } from '../../core';
import { View } from '../../core/View/View';
import {
  getProjectById,
  getColumnsByProjectId,
  getCardsByProjectId
} from './ProjectService';
import { isArray } from '../../../utils/utils';
import { ScrumColumn } from './ScrumColumn';
import { ScrumCard } from './ScrumCard';

const data = {
  columns: [
    {
      id: 1,
      order: 0,
      name: 'Backlog',
    },
    {
      id: 2,
      order: 1,
      name: 'In Progress'
    },
    {
      id: 3,
      order: 2,
      name: 'Done'
    }
  ],
  cards: [
    {
      id: 1,
      columnId: 1,
      order: 0,
      name: 'Card 1',
      description: 'Lorem ipsum...'
    }
  ]
}

export const Project = () => {
  
  const { id } = useParams();

  console.log('rendered')

  const [project, setProject] = useState({});
  const [columns, setColumns] = useState(data.columns)
  const [cards, setCards] = useState(data.cards)
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    getProjectById(id, setProject, setApiError);
  //   getColumnsByProjectId(id, setColumns, setApiError);
  //   getCardsByProjectId(id, setCards, setApiError);
  }, [])

  return (
    <View>
      <div className={styles.header}>
        <Heading>Project: {project?.name}</Heading>
        <Paragraph>{project?.description}</Paragraph>
      </div>
      <div
        className={styles.columnContainer}
        style={{
          display: 'grid',
          columnGap: '1rem',
          gridTemplateColumns: '1fr 1fr 1fr'
        }}
      >
        {isArray(columns) && columns.map((column) => {
          const columnId = column.id;
          const columnCards = cards.filter((card) => card.columnId === columnId)
          return (
            <ScrumColumn
              cards={columnCards}
              column={column}
            />
          )}
        )}
      </div>
    </View>
  )
}
