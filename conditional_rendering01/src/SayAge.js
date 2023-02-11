import React from 'react';
import ReactDOM from 'react-dom/client';


export class SayAge extends React.Component {
  render() {
    return (
      <p>Your age is {this.props.age}!</p>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();