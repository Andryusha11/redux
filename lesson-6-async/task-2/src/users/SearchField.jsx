import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const SearchField = ({ fetchUserData }) => {
  const [userName, setUserName] = useState('');

  const onChange = event => {
    setUserName(event.target.value);
  };

  const handleUserSearch = () => {
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
  fetchUserData: usersActions.fetchUserData
};

export default connect(null, mapDispatch)(SearchField);
