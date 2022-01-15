import React from 'react';
import styles from './SidebarMenu.module.scss';
import { SidebarMenuItem } from './SidebarMenuItem';

export const SidebarMenu = () => {
  return (
    <div className={styles.main}>
      <SidebarMenuItem to="/">Home</SidebarMenuItem>
      <SidebarMenuItem to="/projects">Projects</SidebarMenuItem>
      <SidebarMenuItem to="/projects/new">New</SidebarMenuItem>
    </div>
  )
}
