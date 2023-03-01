import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sum } from './Sum';

const suma = <Sum numbers={[145, 223, 354, 412]} />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(suma);

