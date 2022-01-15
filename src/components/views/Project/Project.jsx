import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading } from '../../core';
import { View } from '../../core/View/View';
import {
  getProjectById,
  getColumnsByProjectId,
  getCardsByProjectId
} from './ProjectService';

export const Project = () => {
  
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [columns, setColumns] = useState([])
  const [cards, setCards] = useState([])
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    getProjectById(id, setProject, setApiError);
    getColumnsByProjectId(id, setColumns, setApiError);
    getCardsByProjectId(id, setCards, setApiError);
  })

  return (
    <View>
      <Heading>Project: {project?.name}</Heading>
    </View>
  )
}
