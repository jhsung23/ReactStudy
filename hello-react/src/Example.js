import React, { useState, useEffect } from 'react';
import Form from './Form';

const Example = () => {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('초기값');

  useEffect(() => {
    console.log('[Example.js - 1] Example 컴포넌트가 화면에 나타났어요! (마운트)');

    return () => {
      console.log('[Example.js - 1] Example 컴포넌트가 화면에서 사라집니다! (언마운트)');
    };
  }, []);

  useEffect(() => {
    console.log('[Example.js - 2] visible 업데이트!');

    return () => {
      console.log(`[Example.js - 2] 현재 visible 값: ${visible}`);
      console.log('[Example.js - 2] visible이 곧 업데이트 됩니다!');
    };
  }, [visible]);

  useEffect(() => {
    console.log('[Example.js - 3] 렌더링 완료~');
  });

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ marginTop: '50px', marginLeft: '50px' }}>
      <span style={{ marginRight: '20px' }}>text: {text}</span>
      <button onClick={handleClick}>{visible ? 'form 숨기기' : 'form 보이기'}</button>
      <hr />
      {visible && <Form setText={setText} />}
    </div>
  );
};

export default Example;
