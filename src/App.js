import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            See The Hurricanes's projects on <a
              href="https://github.com/thehurricanes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
