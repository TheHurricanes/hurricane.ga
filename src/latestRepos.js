import React from 'react';
import { Tag, Heading, Container } from "react-bulma-components/full";

// eslint-disable-next-line
// const API = 'https://api-itydvalvju.now.sh/'; // dev
const API = 'https://api-ehnityowdh.now.sh/'; // prod

const textColorFromBackgroundColor = color => {
  // Return white the first time the page reload
  if(color === undefined) return 'white';
  if (color.length < 5) {
    color += color.slice(1);
  }

  return parseInt(color.replace('#', '0x'), 16) > (0xFFFFFF / 2) ? '#333' : '#fff';
};

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
         this.setState({ repos: data.reverse()[0]})}
        );
  }

  render() {
      const { repos } = this.state;
      const textColor = textColorFromBackgroundColor(repos.primaryLanguage.color);

      return (
        <Container>
          <br/>
          <Heading size={5}>Latest project</Heading>
          <Container>
              <a target="_blank" href={repos.url}> {repos.name} </a>
              <Tag style={{ 
                backgroundColor: repos.primaryLanguage.color,
                color: textColor
                }}>{repos.primaryLanguage.name}
              </Tag>
              <br/>
            <span style={{
              fontSize: '13px',
            }}>{repos.description}</span>
          </Container>
        </Container>
      );
    }
}
