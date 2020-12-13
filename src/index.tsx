import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './router';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/app.scss';

import reportWebVitals from './reportWebVitals';

const App = () => {
  const routing = useRoutes(routes);
  return <>{routing}</>;
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
