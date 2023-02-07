import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './App';



class App extends React.Component {
  render() {
    return <div><HelloWorld /></div>;
  }
}

let aplication = <App />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(aplication);


