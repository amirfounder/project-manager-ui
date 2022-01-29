import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

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

export const ProjectProvider = (props) => {
  const {
    children
  } = props;

  const [isUpdatingCard, setIsUpdatingCard] = useState(false);
  const [isCreatingCard, setIsCreatingCard] = useState(false);
  const [createdCardValues, setCreatedCardValues] = useState({});

  const [cards, setCards] = useState(data.cards);
  const [columns, setColumns] = useState(data.columns);

  const [updatedCardValues, setUpdatedCardValues] = useState({})

  const value = {
    isUpdatingCard, setIsUpdatingCard,
    isCreatingCard, setIsCreatingCard,
    updatedCardValues, setUpdatedCardValues, 
    createdCardValues, setCreatedCardValues,
    cards, setCards,
    columns, setColumns
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw Error('Cannot call useProjectContext outside of ProjectProvider');
  }
  return context;
}