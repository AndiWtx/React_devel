import React from 'react';
import ReactDOM from 'react-dom/client';


export class Welcome extends React.Component {
  render() {
    return (
      <p>Welcome, {this.props.name}!</p>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();


