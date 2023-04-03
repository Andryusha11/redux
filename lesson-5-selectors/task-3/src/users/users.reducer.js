import { users } from './users';
import { CHANGE_VALUE } from './users.actions';

const initialState = {
  usersList: users,
  filterText: ''
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        filterText: action.payload.value
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
