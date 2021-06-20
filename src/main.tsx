import './styles/app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

const App = () => {
  return <Router />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
