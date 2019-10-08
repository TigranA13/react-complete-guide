import React, { useEffect } from 'react';

import classes from "./Cockpit.css";

const cockpit = ( props ) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //http request...
    setTimeout(() => {
      // alert('Save data to cloud!')
    },1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    };
  });

  const assignedClasses = [];
  let btnClass;

  props.showPersons && (btnClass = classes.Red);
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
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

export default React.memo(cockpit);
