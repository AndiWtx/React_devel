import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoList } from './ToDoList';

const toDo = <TodoList
  render={(items, deleteFunction) => (
    <ul>
      {items.map((item) => (
        <div>
          <li>{item}</li>
          <button onClick={() => deleteFunction(item)}>delete</button>
        </div>))}
    </ul>)}
/>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(toDo);


