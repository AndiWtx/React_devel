import React from 'react';
import ReactDOM from 'react-dom/client';


function Hello(name) {
  return <h1> Hello, </h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Hello(<h1>John</h1>));
                  
// What happens if the name variable is not passed to the function?
                  
// The function won't display any name. It will display only "hello, "
