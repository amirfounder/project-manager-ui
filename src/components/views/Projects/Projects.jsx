import React, { useEffect, useState } from 'react';
import { Heading } from '../../core';
import { View } from '../../core/View/View';
import { ProjectsGrid } from './ProjectsGrid';
import { getAllProjects } from './ProjectsService'

export const Projects = () => {

  const [projects, setProjects] = useState([])
  const [apiError, setApiError] = useState('')

  useEffect(() => {
    getAllProjects(setProjects, setApiError)
  }, [])

  return (
    <View>
      <Heading level='1'>Projects</Heading>
      {apiError && <p>{apiError}</p>}
      <ProjectsGrid
        projects={projects}
      />
    </View>
  )
}