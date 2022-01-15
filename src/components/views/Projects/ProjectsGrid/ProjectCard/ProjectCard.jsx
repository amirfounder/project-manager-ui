import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Line, Paragraph } from '../../../../core';
import styles from './ProjectCard.module.scss'

export const ProjectCard = (props) => {
  const {
    project
  } = props;
  
  return (
    <div className={styles.main}>
      <Heading level='3'>{project.name}</Heading>
      <Paragraph>{project.description}</Paragraph>
      <Line />
      <Link className={styles.link} to={`/project/${project.id}`}>View Project</Link>
    </div>
  )
}
