import React from 'react';
import styles from './App.module.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../views/Sidebar/Sidebar';

export const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<div>hello</div>}/>
          <Route exact path="/projects" element={<div>Projects</div>} />
        </Routes>
      </div>
    </div>
  )
}