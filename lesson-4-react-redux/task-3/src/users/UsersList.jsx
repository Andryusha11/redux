import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as UsersActions from './users.actions';

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

  const goPrev = () => {
    if (currentPage <= 1) {
      return null;
    }
    goPrevPage();
  };

  const goNext = () => {
    if (totalItems <= currentPage * itemsPerPage) {
      return null;
    }
    goNextPage();
  };

  return (
    <>
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
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
    users: state.users.usersList,
    currentPage: state.users.currentPage + 1
  };
};

const mapDispatch = {
  goNextPage: UsersActions.goNextPage,
  goPrevPage: UsersActions.goPrevPage
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
