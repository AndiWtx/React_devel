import React from 'react';
import ReactDOM from 'react-dom/client';


export class SayAge extends React.Component {
  render() {
    const isAgeVerified = this.props.age;
    if (isAgeVerified >= 18) {
      return <p>Your age is {this.props.age}!</p>
    } else return <p>You are too young!</p>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();