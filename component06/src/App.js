import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './HelloWorld';

const helloWorldElement = <HelloWorld />

export class App extends React.Component {
  render() {
    return <div>
      {helloWorldElement}
      <p>What a wonderful day!</p>
    </div>;
  }
}

let aplication = <App />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(aplication);


