import React, { Component } from 'react';

import classes from './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '01', name: 'Max', age: 28},
      {id: '02', name: 'Manuel', age: 25},
      {id: '03', name: 'Stephanie', age: 22},
    ],
    text: 'Hello',
    username: 'superMax',
    showPersons: false,
  };


  changeTextHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
              return (
                <Person
                  key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  details={person}
                  changed={(event) => this.changeTextHandler(event, person.id)}
                />
              )
            })
          }
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>React App</h1>
          <p className={assignedClasses.join(' ')}>This is working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}
          >
            Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
