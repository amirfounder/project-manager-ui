import React from 'react';
import { Heading, Line } from '../../../../core';
import styles from './ProjectCard.module.scss'

export const ProjectCard = (props) => {
  const {
    project
  } = props;
  
  return (
    <div className={styles.main}>
      <Heading level='3'>{project.name}</Heading>
      <div>{project.tag}</div>
      <Line />
      <div>{project.description}</div>
    </div>
  )
}
