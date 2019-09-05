import React, { useState, useEffect } from 'react';
import Repos from './repos';
import Logo from './logo.png';

const API = 'https://api.github.com/orgs/thehurricanes/repos';

function App() {
  const [ repos, setRepos ] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => setRepos(json.splice(0, 5)))
      .catch((error) => console.log(error.message));
  });

  return (
    <div className="app">
      <img src={Logo} className="logo" alt="logo" />
      <h1>The Hurricanes</h1>
      <p>
        See our projects on <a href="https://github.com/thehurricanes" target="_blank" rel="noopener noreferrer">github</a>
      </p>

      {repos ? <Repos repos={repos} /> : <div />}
    </div>
  );
}

export default App;
