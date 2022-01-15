import React from 'react'
import { ProjectPreviewCard } from './ProjectPreviewCard';
import styles from './ProjectsGrid.module.scss'

export const ProjectsGrid = (props) => {
  const {
    projects
  } = props;

  return (
    <div className={styles.main}>
      {Array.isArray(projects) && projects.map((project) => (
        <ProjectPreviewCard
          project={project}
        />
      ))}
    </div>
  )
}
