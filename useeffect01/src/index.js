import React from 'react';
import ReactDOM from 'react-dom/client';
import { HandleButtonClick } from './HandleButtonClick'


const btn = <HandleButtonClick onCounterChange />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(btn);


