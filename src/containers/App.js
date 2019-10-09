import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      {id: '01', name: 'Max', age: 28},
      {id: '02', name: 'Manuel', age: 25},
      {id: '03', name: 'Stephanie', age: 22},
    ],
    text: 'Hello',
    username: 'superMax',
    showPersons: false,
    showCockpit: true,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStatesFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] component will mount')
  // }

  componentDidMount() {
    console.log('[App.js] component did mount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] should component update');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] component did update')
  }

  changeNameHandler = (event, id) => {
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

  removeCockpit = () => {
    this.setState({showCockpit: !this.state.showCockpit})
  };

  loginHandler = () => {
    this.setState({authenticated: true})
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
            isAuthenticated={this.state.authenticated}
          />
      );
    }

    return (
        <Aux >
          <button onClick={this.removeCockpit}>Remove Cockpit</button>
          <AuthContext.Provider
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler,
            }}
          >
            {
              this.state.showCockpit &&
              <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                toggleBtn={this.togglePersonsHandler}
              />
            }
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
