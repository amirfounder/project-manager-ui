import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Line, Paragraph } from '../../../../core';
import styles from './ProjectPreviewCard.module.scss'

export const ProjectPreviewCard = (props) => {
  const {
    project
  } = props;
  
  return (
    <div className={styles.main}>
      <Heading level='3'>{project.name}</Heading>
      <Line />
      <Paragraph>{project.description}</Paragraph>
      <Link className={styles.link} to={`/projects/${project.id}`}>View Project</Link>
    </div>
  )
}
