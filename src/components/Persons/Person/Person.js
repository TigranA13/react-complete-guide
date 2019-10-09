import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElementRef.focus()
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] render');
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in.</p>}
          <p onClick={this.props.click}>
            I'm a {this.props.details.name} and I am {this.props.details.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            // ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}
            type="text"
            value={this.props.details.name}
            onChange={this.props.changed}
          />
      </Aux>
    )
  }
}

Person.propTypes = {
  // detail: {
  //   name: PropTypes.string,
  //   age: PropTypes.number,
  // },
  click: PropTypes.func,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
