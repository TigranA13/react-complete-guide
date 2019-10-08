import React, { PureComponent } from 'react';

import Person from "./Person/Person";
import PropTypes from 'prop-types';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] get derived state from props');
  //   return state;
  // }

  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('[Persons.js] component will receive props');
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[Persons.js] should component update');
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] get snapshot before update');
    return null;
  }

  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log('[Persons.js] component will update');
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] component did update');
  }

  componentWillUnmount() {
    console.log('[Persons.js] component will unmount')
  }

  render() {
    console.log('[Persons.js] render');
    return this.props.persons.map( (person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          details={person}
          changed={(event) => this.props.changed(event, person.id)}
        />
      )
    })
  }
}

Persons.propType = {
  detail: PropTypes.object
};

export default Persons;
