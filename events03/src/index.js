import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClickTracker } from './HandleButtonClick'


const btn = <ClickTracker />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(btn);


