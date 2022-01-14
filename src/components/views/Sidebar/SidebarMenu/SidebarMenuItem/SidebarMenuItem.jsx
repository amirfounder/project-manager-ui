import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SidebarMenuItem.module.scss';

export const SidebarMenuItem = (props) => {
  const {
    children,
    ...other
  } = props;

  return (
    <Link
      className={styles.main}
      {...other}
    >
      {children}
    </Link>
  )
}
