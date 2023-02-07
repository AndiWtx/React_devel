import React from 'react';
import ReactDOM from 'react-dom/client';


function Sum(a, b) {
  return <h2>sum of {a}+{b}={a + b}</h2>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Sum(4, 5));
