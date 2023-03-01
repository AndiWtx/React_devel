import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sum } from './Sum';

const suma = <Sum numbers={[145, 223, 354, 412]} />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(suma);

// if we don't pass the numbers when rendering the component, it will take the default parameter from the function :) 