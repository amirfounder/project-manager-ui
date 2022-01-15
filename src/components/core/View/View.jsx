import React from 'react';
import styles from './View.module.scss'

export const View = (props) => {
  const {
    children,
    ...other
  } = props

  return (
    <div
      className={styles.main}
      {...other}
    >
      {children}
    </div>
  )
}
