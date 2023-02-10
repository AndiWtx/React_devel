import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './HelloWorld';

const helloWorldElement = <HelloWorld />

class App extends React.Component {
  render() {
    return <div>{helloWorldElement}</div>;
  }
}

let aplication = <App />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(aplication);


