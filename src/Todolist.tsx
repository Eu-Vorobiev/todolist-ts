import React, { ChangeEvent, useState } from 'react';
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
  addTask: (title: string) => void
}

export function Todolist(props: TodolistPropsType) {  // принимаем пропсы по типу TodolistPropsType
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => { 
    if (e.key === 'Enter') {
      props.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  }

  const onAddTaskClick = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle('');
  }

  const onAllClickHandler = () => props.changeFilter('all');
  const onActiveClickHandler = () => props.changeFilter('active');
  const onCompletedClickHandler = () => props.changeFilter('completed');

  return (
    <div className="Todolist">
      <h1>{props.title}</h1>
      <div className='input-wrap'>
        <input 
          className='input'
          value={newTaskTitle}
          onChange={onChangeHandler}
          onKeyUp={onKeyPressHandler}
        />
        <button className='add-btn' onClick={ onAddTaskClick }>Add</button>
      </div>
      <ul className='list'>
        {
          props.tasks.map(task => {
            const onRemoveHandler = () => props.removeTask(task.id);

            return <li className='list-item' key={task.id}>
              <input type='checkbox' checked={task.isDone} />
              <span>{task.title}</span>
              <button onClick={ onRemoveHandler }>x</button>
            </li>
          })
        }
      </ul>
      <div className="btn-wrap">
        <button onClick={onAllClickHandler} >All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>
    </div>
  );
}