const initialState = {
  persons: [],
};

export const actionType = {
  ADD_PERSON: 'ADD_PERSON',
  DELETE_PERSON: 'DELETE_PERSON',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat(action.person),
      };
    case actionType.DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !==action.id),
      };
    default:
      return state;
  }
}
