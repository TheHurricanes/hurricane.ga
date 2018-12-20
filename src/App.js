import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Repos from './latestRepos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <p>
            The Hurricanes. See our projects on <a
              href="https://github.com/thehurricanes"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </p>
          <div>
            <Repos/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
