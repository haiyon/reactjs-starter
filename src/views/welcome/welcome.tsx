import React from 'react';
import Page from 'src/components/page';
import logo from 'src/assets/images/logo.svg';

const Welcome = () => (
  <Page title="Welcome">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  </Page>
);

Welcome.propTypes = {};

export default Welcome;
