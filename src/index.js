import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp/TodoApp';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>To-Do-List</h1>
    <TodoApp/>
  </div>
);


