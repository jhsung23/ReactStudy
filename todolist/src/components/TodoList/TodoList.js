import React from 'react';
import './TodoList.scss';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
  return (
    <div className="list-container">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
