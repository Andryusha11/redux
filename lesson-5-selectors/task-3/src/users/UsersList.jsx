import React from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import User from './User';
import * as usersActions from './users.actions';
import {
  filterTextSelector,
  filteredUsersListSelector
} from './users.selectors';

const UsersList = ({ users, filterText, onChange }) => {
  return (
    <div>
      <Filter
        filterText={filterText}
        count={users.length}
        onChange={onChange}
      />
      <ul className="users">
        {users.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: filteredUsersListSelector(state),
    filterText: filterTextSelector(state)
  };
};

const mapDispatch = {
  onChange: usersActions.onChangeValue
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
