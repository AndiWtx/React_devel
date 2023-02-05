import React from 'react';
import ReactDOM from 'react-dom/client';


function Hello(name) {
  return <h1> Hello, {name}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Hello(<h1>John</h1>));
                  
//  What happens if the name variable contains a JSX expression instead of a string?
                  
//  The name will be on another line. 
