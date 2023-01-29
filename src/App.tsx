import React from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {
  let tasks1: Array<TaskType> = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
  ]
  let tasks2: Array<TaskType> = [
    { id: 1, title: 'Water', isDone: false },
    { id: 2, title: 'Peanuts', isDone: false },
    { id: 3, title: 'Bread', isDone: false },
  ]

  return (
    <div className="App">
      <Todolist title='What to learn' tasks={tasks1} />
      <Todolist title='What to buy' tasks={tasks2} />
    </div>
  );
}

export default App;
