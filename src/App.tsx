import React, {useState} from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from "uuid";
import { title } from 'process';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  let initTasks: Array<TaskType> = [
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'React', isDone: false },
  ]

  let [tasks, setTasks] = useState(initTasks);
  let [filter, setFilter] = useState<FilterValuesType>('all');  // типизация переменной filter - можно либо возле useState, либо в самой переменной как в initTasks

  function removeTask(id: string) {
    let filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function addTask(title: string) { 
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks]; // если добавить tasks, будет добавлен именно массив, а чтобы добавить все элементы массива, нужно добавить ...
    setTasks(newTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }
  let tasksForTodolist = tasks;

  if (filter === 'active') { 
    tasksForTodolist = tasks.filter(task => task.isDone === false);
  }
  if (filter === 'completed') { 
    tasksForTodolist = (tasks.filter(task => task.isDone === true));
  }

  return (
    <div className="App">
      <Todolist title='What to learn' tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask} />
    </div>
  );
}

export default App;
