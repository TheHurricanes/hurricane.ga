import React from 'react';

const localAPI = 'https://api-itydvalvju.now.sh/';
const API = 'https://api-ehnityowdh.now.sh/';

export default class Repos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: {
        primaryLanguage: {}
      },
    };
}
  componentDidMount() {
     fetch(API)
       .then(response => response.json())
       .then(data => {
         this.setState({ repos: data[1] })
       }
         );

   }

  render() {
      const { repos } = this.state;

      return (
        <div className="latest-repositories">
          <h3>Our latest project</h3>
          <div>
            <h4>
              <a
                className="latest-repos-title"
                href={repos.url}
                style={{
                  textDecoration: 'none',
                  color: '#4275d4'
                }}
              >
              {repos.name}
              </a> <spam
                className="programming-language"
                style={{
                  backgroundColor: repos.primaryLanguage.color,
                  borderRadius: '5px',
                  fontSize: '15px',
                  width: '25%',
                  height: '17px',
                  display: 'inline-block',
                  position: 'relative',
                }}>
                {repos.primaryLanguage.name}
              </spam>
            </h4>
            <small
              className="repo-description">
                {repos.description}
            </small>
          </div>
        </div>
      );
    }
}
