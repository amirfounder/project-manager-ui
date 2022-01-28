import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { ProjectProvider } from './components/context/ProjectProvider';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </BrowserRouter>
  , document.getElementById('root')
);