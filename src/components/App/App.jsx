import React from 'react';
import styles from './App.module.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { NewProject, Projects, Sidebar } from '../views';

export const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<div>hello</div>}/>
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/new" element={<NewProject />} />
        </Routes>
      </div>
    </div>
  )
}