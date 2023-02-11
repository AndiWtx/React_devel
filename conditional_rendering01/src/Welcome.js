import React from 'react';
import ReactDOM from 'react-dom/client';
import { SayAge } from './SayAge';


export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <SayAge age={19} />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();


