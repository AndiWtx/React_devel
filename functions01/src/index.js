import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from './Welcome';

const welcome = <Welcome name="John" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(welcome);
