import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { actionType } from '../store/reducer';

const names = [
  'Chrissy Scherr',
  'Mari Romaine',
  'Kaitlyn Sommer',
  'Sibyl Blount',
  'Waneta Giesen',
  'Angelyn Manriquez',
  'Florentino Mcnicholas',
  'Edythe Raposo',
  'Kieth Decelles',
  'Christel Eades',
  'Eliza Grise',
  'Beverlee Savant',
  'Alda Mahone',
  'Duncan Mooring',
  'Clemencia Kavanagh',
  'Tana Sunderman',
  'Kirstin Houseman',
  'Noriko Sperry',
  'Imogene Algarin',
  'Mui Shirah',
];

function getRandomIdx(max) {
  return Math.round(Math.random() * max);
}

class Persons extends Component {
  personAddedHandler = person => {
    let newPerson;
    if (person && person.name && person.age) {
      newPerson = person;
    } else {
      newPerson = {
        name: names[getRandomIdx(names.length-1)],
        age: Math.floor(Math.random() * 40),
      };
    }
    newPerson.id = new Date().getTime();
    this.props.onAddPerson(newPerson);
  };

  render() {
    return (
      <div>
        <AddPerson personAdded={this.personAddedHandler} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  persons: state.persons,
});

const mapDispatchToProps = dispatch => ({
  onAddPerson: person => dispatch({ type: actionType.ADD_PERSON, person }),
  onDeletePerson: id => dispatch({ type: actionType.DELETE_PERSON, id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
