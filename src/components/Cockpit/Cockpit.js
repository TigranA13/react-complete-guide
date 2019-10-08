import React from 'react';

import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass;

  props.showPersons && (btnClass = classes.Red);
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is working!</p>
      <button
        className={btnClass}
        onClick={props.toggleBtn}
      >
        Toggle Persons
      </button>
    </div>
  )
};

export default cockpit;
