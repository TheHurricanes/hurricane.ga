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
          <p>
            See The Hurricanes's projects on <a
              href="https://github.com/thehurricanes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
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

//     <h3>Latest projects</h3>
//     <template class="latest-repos-template">
//   <div>
//     <h4>
//       <a class="latest-repos-title" href=""></a>
//       <span class="tag latest-repos-language">pure blah blah blah</span>
//     </h4>
//     <p class="latest-repos-description"></p>
//   </div>
// </template>
// <div class="latest-repos"></div>
