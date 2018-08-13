import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Viacep from './components/Viacep.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ViaCep API</h1>
        </header>
        <Viacep />
      </div>
    );
  }
}

export default App;
