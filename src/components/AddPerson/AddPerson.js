import React, { Component } from 'react';
import './AddPerson.css';

export default class AddPerson extends Component {
  state = {
    name: null,
    age: null,
  };
  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          value={this.state.name || ''}
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="Age"
          value={this.state.age || ''}
          onChange={e => {
            this.setState({ age: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.personAdded({ ...this.state });
            this.setState({ name: null, age: null });
          }}
        >
          Add Person
        </button>
      </div>
    );
  }
}
