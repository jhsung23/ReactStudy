import React, { useState, useEffect } from 'react';

const Form = ({ setText }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('[Form.js - 1] Form 컴포넌트가 화면에 나타났어요! (마운트)');

    return () => {
      console.log('[Form.js - 1] Form 컴포넌트가 화면에서 사라집니다! (언마운트)');
    };
  }, []);

  useEffect(() => {
    console.log('[Form.js - 2] input 업데이트!');

    return () => {
      console.log(`[Form.js - 2] 현재 input 값: ${input}`);
      console.log('[Form.js - 2] input이 곧 업데이트 됩니다!');
    };
  }, [input]);

  useEffect(() => {
    console.log('[Form.js - 3] 렌더링 완료~');
  });

  const handleClick = () => {
    setText(input);
    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h3>Form</h3>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>변경</button>
    </div>
  );
};

export default Form;
