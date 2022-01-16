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

export const Project = () => {
  
  const { id } = useParams();

  console.log('rendered')

  const [project, setProject] = useState([]);
  const [columns, setColumns] = useState([])
  const [cards, setCards] = useState([])
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    getProjectById(id, setProject, setApiError);
    getColumnsByProjectId(id, setColumns, setApiError);
    getCardsByProjectId(id, setCards, setApiError);
  }, [])

  return (
    <View>
      <div className={styles.header}>
        <Heading>Project: {project?.name}</Heading>
        <Paragraph>{project?.description}</Paragraph>
      </div>
    </View>
  )
}
