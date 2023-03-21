import { ADD_USER, DELETE_USER } from './users.actions';

const initialState = {
  usersList: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        usersList: state.usersList.concat(action.payload)
      };
    case DELETE_USER:
      return state.usersList.filter(
        user => user.id !== action.payload.id
      );
    default:
      return state;
  }
};
