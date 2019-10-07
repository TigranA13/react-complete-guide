import React from 'react';

import './Person.css';

const person = (props) => {

  return (
    <div className={'Person'}>
      <p onClick={props.click}>I'm a {props.details.name} and I am {props.details.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" value={props.details.name} onChange={props.changed} />
    </div>
  )
};

export default person;
