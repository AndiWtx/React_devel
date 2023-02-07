import React from 'react';
import ReactDOM from 'react-dom/client';


function Hello(name) {
  return <h1> Hello,</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Hello(<h1>Joh</h1>));