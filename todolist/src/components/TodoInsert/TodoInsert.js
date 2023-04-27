import React from 'react';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <div>
      <input
        className="todo-input"
        type="text"
        placeholder="할 일을 입력하고 Enter를 눌러 저장하세요."
      />
    </div>
  );
};

export default TodoInsert;
