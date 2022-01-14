import React, { useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import { getAllProjects } from './ProjectsService'

export const Projects = () => {

  const [projects, setProjects] = useState([])
  const [apiError, setApiError] = useState('')

  useEffect(() => {
    getAllProjects(setProjects, setApiError)
  }, [])

  return (
    <div>
      {apiError !== '' && <div>{apiError}</div>}
      {projects.map((project) => (
        <>
          <div>{project.id}</div>
          <div>{project.name}</div>
        </>
      ))}
    </div>
  )
}