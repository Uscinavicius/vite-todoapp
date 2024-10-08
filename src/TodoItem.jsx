import React from 'react';
//Create a todo Item component that will be used in the TodoList component
const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(index)}
        className='inputtextbox'
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;