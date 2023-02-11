import React from 'react';
import ReactDOM from 'react-dom/client';
import { SayAge } from './SayAge';


export class Welcome extends React.Component {
  render() {
    let ageVerify = 19;
    if (ageVerify >= 18) {
      return (
        <div>
          <p>Welcome, {this.props.name}!</p>
          <SayAge age={ageVerify} />
        </div>
      )
    } else {
      return (
        <div>
          <p>Welcome, {this.props.name}!</p>
        </div>
      )
    }
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();


