import React from 'react';
import ReactDOM from 'react-dom/client';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}


class App extends React.Component {
  render() {
    return <div><HelloWorld /></div>;
  }
}

let aplication = <App />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(aplication);


