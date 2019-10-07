import React from 'react';

import Person from "./Person/Person";

const persons = (props) => (
  props.persons.map( (person, index) => {
    return (
      <Person
        key={person.id}
        click={() => props.clicked(index)}
        details={person}
        changed={(event) => props.changed(event, person.id)}
      />
    )
  })
);

export default persons;
