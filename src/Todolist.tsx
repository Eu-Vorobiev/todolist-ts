import React from 'react';
import { FilterValuesType } from './App';

// типизация объекта Tasks
export type TaskType = {
  id: string,
  title: string,
  isDone: boolean
}

// типизация основных пропсов к компоненте Todolist
type TodolistPropsType = {
  title: string,
  tasks: Array<TaskType>,
  removeTask: (id: string) => void  // функция, которая принимает id и ничего не возвращает (void)
  changeFilter: (value: FilterValuesType) => void  // функция, которая принимает value и ничего не возвращает (void)
}

export function Todolist(props: TodolistPropsType) {  // принимаем пропсы по типу TodolistPropsType
  return (
    <div className="Todolist">
      <h1>{props.title}</h1>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
      <ul>
        {
          props.tasks.map(task => {
            return <li key={task.id}>
              <input type='checkbox' checked={task.isDone} />
              <span>{task.title}</span>
              <button onClick={() => { props.removeTask(task.id) }}>x</button>
            </li>
          })
        }
      </ul>
      <div>
        <button onClick={() => {props.changeFilter('all')}} >All</button>
        <button onClick={() => {props.changeFilter('active')}}>Active</button>
        <button onClick={() => {props.changeFilter('completed')}}>Completed</button>
      </div>
    </div>
  );
}