import React from 'react';
import ReactDOM from 'react-dom/client';
import { GithubUser } from './GithubUser';
import GithubUserList from './GithubUserList';


class GithubIndex extends React.Component {
  render() {
    return (
      <div>
        <GithubUser />
        <GithubUserList />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GithubIndex />);

