import React from 'react';
import ReactDOM from 'react-dom/client';


export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <p>Your age is {this.props.age}</p>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();


