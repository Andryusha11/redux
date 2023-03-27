export const ADD_USER = 'USER/ADD_USER';
export const REMOVE_USER = 'USER/REMOVE_USER';

export const setUser = userData => {
  return {
    type: ADD_USER,
    payload: {
      userData
    }
  };
};
export const removeUser = () => {
  return {
    type: REMOVE_USER,
    payload: null
  };
};
