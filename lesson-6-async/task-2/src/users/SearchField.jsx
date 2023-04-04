import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import { getUserData } from './users.gateway';

const SearchField = ({
  showSpinner,
  userDataReceived,
  fetchUserData
}) => {
  const [userName, setUserName] = useState('');

  const onChange = event => {
    setUserName(event.target.value);
  };

  const handleUserSearch = () => {
    // showSpinner();
    fetchUserData(userName);
  };
  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={userName}
        onChange={onChange}
      />
      <button
        className="name-form__btn btn"
        onClick={handleUserSearch}
      >
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  // showSpinner: usersActions.showSpinner,
  // userDataReceived: usersActions.userDataReceived,
  fetchUserData: usersActions.fetchUserData
};

export default connect(null, mapDispatch)(SearchField);
