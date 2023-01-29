import React from 'react';

// типизация объекта Tasks
export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}

// типизация основных пропсов к компоненте Todolist
type TodolistPropsType = {
  title: string,
  tasks: Array<TaskType>
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
        <li><input type="checkbox" checked={true} /><span>Learn React</span></li>
        <li><input type="checkbox" checked={false} /><span>Learn TypeScript</span></li>
        <li><input type="checkbox" checked={false} /><span>Learn React-Redux</span></li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}