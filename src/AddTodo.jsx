import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add the new task using the addTodo function
    // TODO: Clear the input field after adding the task
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className='inputtextbox'
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;