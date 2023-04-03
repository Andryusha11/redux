export const CHANGE_VALUE = 'USERS/CHANGE_VALUE';

export const onChangeValue = value => {
  return {
    type: CHANGE_VALUE,
    payload: {
      value
    }
  };
};
