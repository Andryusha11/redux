import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as UsersActions from './users.actions';
import {
  currentPageSelector,
  usersListSelector
} from './users.selectors';

const UsersList = ({
  users,
  goNextPage,
  goPrevPage,
  currentPage
}) => {
  const totalItems = users.length;
  const itemsPerPage = 3;
  const startIndex = itemsPerPage * currentPage - itemsPerPage;
  const endIndex = itemsPerPage * currentPage;
  const usersList = users.slice(startIndex, endIndex);

  return (
    <>
      <Pagination
        goNext={goNextPage}
        goPrev={goPrevPage}
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersList.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </>
  );
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state)
  };
};

const mapDispatch = {
  goNextPage: UsersActions.goNextPage,
  goPrevPage: UsersActions.goPrevPage
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
