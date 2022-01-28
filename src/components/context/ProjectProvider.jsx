import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const {
    children
  } = props;

  const [isUpdatingCard, setIsUpdatingCard] = useState(false);
  const [isCreatingCard, setIsCreatingCard] = useState(false);

  const [updatedCardValues, setUpdatedCardValues] = useState({})

  const value = {
    isUpdatingCard,
    setIsUpdatingCard,
    isCreatingCard,
    setIsCreatingCard,
    updatedCardValues,
    setUpdatedCardValues
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