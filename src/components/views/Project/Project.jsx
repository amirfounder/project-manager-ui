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
import { useProjectContext } from '../../context/ProjectProvider';
import { CreateCardModal } from './CreateCardModal';

export const Project = () => {

  const { id: projectId } = useParams();

  const {
    isCreatingCard, setIsCreatingCard,
    isUpdatingCard, setIsUpdatingCard,
    cards, setCards,
    columns, setColumns,
    createdCardValues, setCreatedCardValues,
    updatedCardValues
  } = useProjectContext();

  const [project, setProject] = useState({});
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    getProjectById(projectId, setProject, setApiError);
    getColumnsByProjectId(projectId, setColumns, setApiError);
    getCardsByProjectId(projectId, setCards, setApiError);
  }, [])

  useEffect(() => {
    const projectIdAsNum = Number(projectId)
    setCreatedCardValues((prevState) => ({
      ...prevState,
      projectId: projectIdAsNum
    }))
  }, [projectId])

  const style = {
    gridTemplateColumns: `repeat(${columns?.length}, 1fr)`
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
              key={column.id}
              cards={columnCards}
              column={column}
            />
          )
        }
        )}
      </div>
      {isCreatingCard && <CreateCardModal />}
      {isUpdatingCard && (
        <UpdateCardModal
          show={isUpdatingCard}
          setShow={setIsUpdatingCard}
        />
      )}
    </View>
  )
}
