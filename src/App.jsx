import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTodos(JSON.parse(tasks));
    }
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever they change
    localStorage.setItem('tasks', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    // Add a new task to the todos state
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    // Toggle the completion status of the task at the given index
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    // Delete the task at the given index from the todos state
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;