import React from 'react';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import {
  isFetchingSelector,
  userDataSelector
} from './users.selectors';

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }
  if (!userData) {
    return null;
  }
  const { name, location, avatar_url } = userData;
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    isFetching: isFetchingSelector(state),
    userData: userDataSelector(state)
  };
};

export default connect(mapState)(UserInfo);
