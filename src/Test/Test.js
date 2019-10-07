import React, {useState}  from 'react';

import Valid from './valid';

const test = () => {
  const [text, setText] = useState('');
  const [textLength, setLength] = useState(0);

  const textHandler = (e) => {
    setText(e.target.value);
    setLength(e.target.value.length);
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={(event) => textHandler(event)}/>
      <p>{textLength}</p>
      <Valid textLength={textLength}/>
    </div>
  )
};

export default test;
