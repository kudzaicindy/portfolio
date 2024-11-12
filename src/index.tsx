import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HashRouter from './HashRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter />
  </React.StrictMode>
);
