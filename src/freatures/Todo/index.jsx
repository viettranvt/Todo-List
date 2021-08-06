import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import SearchBar from '../../components/SearchBar';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
//import { addTask, doneTask } from '../../actions/todo';
import { addTask, doneTask } from './todoSlice';

function Todo() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.list);
  const [filter, setFilter] = useState(todoList);

  // const [todoList, setTodoList] = useState([
  //   { id: uuid(), title: 'Pay Bills', completed: true },
  //   { id: uuid(), title: 'Learn ReactJS', completed: false },
  //   { id: uuid(), title: 'Learn NodeJS Express', completed: true },
  //   { id: uuid(), title: 'Learn PassportJS', completed: false },
  //   { id: uuid(), title: 'Complete Final Project', completed: false },
  //   { id: uuid(), title: 'Have Dinner', completed: false },
  //   { id: uuid(), title: 'Complete Final Project', completed: false },
  // ]);

  const handleTodoClick = (todo) => {
    //const newTodoList = [...todoList];
    // const todoIndex = todoList.findIndex((td) => todo.id === td.id);

    //if (todoIndex > 0) {
    //newTodoList[todoIndex].completed = true;
    //setTodoList(newTodoList);
    //}

    const action = doneTask(todo);
    dispatch(action);
  };

  const handleAddTaskSubmit = (value) => {
    const newTask = {
      id: uuid(),
      title: value,
      completed: false,
    };
    //const newTodoList = [...todoList];
    //newTodoList.push(newTask);
    //setTodoList(newTodoList);

    const action = addTask(newTask);
    dispatch(action);
  };

  const handleFilterSubmit = (value) => {};

  return (
    <div>
      <SearchBar onSubmit={handleFilterSubmit} />
      <TodoList
        title='Todo List'
        onTodoClick={handleTodoClick}
        todoList={todoList}
      />
      <AddTask onSubmit={handleAddTaskSubmit} title='Add Task' />
    </div>
  );
}

export default React.memo(Todo);
