import React from 'react'
import { Heading } from '../../core'
import styles from './Sidebar.module.scss'
import { SidebarMenu } from './SidebarMenu'

export const Sidebar = () => {
  
  const year = new Date().getFullYear()

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Heading level='1'>Amir's Scrum Board</Heading>
      </div>
      <div className={styles.container}>
        <SidebarMenu />
      </div>
      <div className={styles.container}>
        Copyright {year} ©
      </div>
    </div>
  )
}