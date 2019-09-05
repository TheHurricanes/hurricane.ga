import React from 'react';
import { Tag } from 'react-bulma-components/full';

export default function Repos({ repos = [] }) {
  return (
    <ul>
      {repos.map((repo, idx) => {
        return (
          <a key={`${repo.name}_${idx}_${repo.node_id}`} href={repo.html_url}>
            <li className="repo">
              <p>{repo.name} </p>
              <Tag style={{ backgroundColor: 'black', color: 'white' }}>
                {repo.language ? repo.language : '@( * O * )@'}
              </Tag>
            </li>
          </a>
        );
      })}
    </ul>
  );
}
