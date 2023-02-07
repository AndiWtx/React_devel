import React from 'react';
import ReactDOM from 'react-dom/client';


class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}

const helloWorldElement = <HelloWorld />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(helloWorldElement);
