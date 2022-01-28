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
import { Modal } from '../../core/Modal';
import { CreateCardModalBody } from './modals/CreateCardModalBody/CreateCardModalBody';
import { ProjectProvider, useProjectContext } from '../../context/ProjectProvider';

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
      description: 'Lorem ipsum...',
      isInEditMode: false
    }
  ]
}

export const Project = () => {

  const { id } = useParams();

  const {
    isCreatingCard, setIsCreatingCard,
    isUpdatingCard, setIsUpdatingCard,
    updatedCardValues
  } = useProjectContext();

  const [project, setProject] = useState({});
  const [columns, setColumns] = useState(data.columns)
  const [cards, setCards] = useState(data.cards)
  const [apiError, setApiError] = useState('');
  const [isCardModalOpen, setIsCardModalOpen] = useState(false)

  useEffect(() => {
    getProjectById(id, setProject, setApiError);
    // getColumnsByProjectId(id, setColumns, setApiError);
    // getCardsByProjectId(id, setCards, setApiError);
  }, [])

  const style = {
    gridTemplateColumns: `repeat(${columns.length}, 1fr)`
  }

  return (
    <View>
      <div className={styles.header}>
        <Heading>Project: {project?.name}</Heading>
        <Paragraph>{project?.description}</Paragraph>
      </div>
      <div
        className={styles.columnContainer}
        style={style}
      >
        {isArray(columns) && columns.map((column) => {
          const columnId = column.id;
          const columnCards = cards.filter((card) => card.columnId === columnId)
          return (
            <ScrumColumn
              setShowModal={setIsCardModalOpen}
              cards={columnCards}
              column={column}
            />
          )
        }
        )}
      </div>
      {isCreatingCard && (
        <CreateCardModal
          show={isCreatingCard}
          setShow={setIsCreatingCard}
        />
      )}
      {isUpdatingCard && (
        <UpdateCardModal
          show={isUpdatingCard}
          setShow={setIsUpdatingCard}
        />
      )}
    </View>
  )
}
