import React from 'react';
import {connect} from 'react-redux';

const User = ({loading, user}) => {
  if (loading) return 'LOADING...';
  return (
    <ul>
      <li>Name: {user.name}</li>
      <li>Type: {user.type}</li>
      <li>Login: {user.login}</li>
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user.data,
    loading: state.user.laoding,
  }
}

export default connect(mapStateToProps)(User);
