import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoList } from './ToDoList';

const toDo = <TodoList />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(toDo);


