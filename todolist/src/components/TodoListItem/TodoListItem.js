import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="item-container">
      <input type="checkbox" className="item-checkbox" />
      <span className="item-content">asdfasdf</span>
      <MdRemoveCircleOutline className="item-remove-button" />
    </div>
  );
};

export default TodoListItem;
