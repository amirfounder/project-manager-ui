import React from 'react'
import { ProjectCard } from './ProjectCard';
import styles from './ProjectsGrid.module.scss'

export const ProjectsGrid = (props) => {
  const {
    projects
  } = props;

  return (
    <div className={styles.main}>
      {Array.isArray(projects) && projects.map((project) => (
        <ProjectCard
          project={project}
        />
      ))}
    </div>
  )
}
