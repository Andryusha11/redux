import React from 'react';
import { connect } from 'react-redux';
import * as UsersActions from './users.actions';

const Users = ({ users, addUser, deleteUser }) => {
  const onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`
    };
    addUser(newUser);
  };
  return (
    <div className="users">
      <button onClick={onUserCreate} className="users__create-btn">
        Create user
      </button>
      <ul className="users__list">
        {users.map(user => (
          <li key={user.id} className="users__list-item">
            <span>{user.name}</span>
            <button
              onClick={() => deleteUser(user.id)}
              className="users__delete-btn"
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.users.usersList
  };
};

const mapDispatch = {
  addUser: UsersActions.addUser,
  deleteUser: UsersActions.deleteUser
};

const connector = connect(mapState, mapDispatch);

export default connector(Users);
