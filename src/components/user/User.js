import React from 'react';
import {connect} from 'react-redux';
import {USER_STATUSES, runFecthUserAC} from '../../actions/user';

const User = ({status, user, runFecthUserAC}) => {
  if (status === USER_STATUSES.init) {
    runFecthUserAC();
    return null;
  }
  if (status === USER_STATUSES.pending) return 'LOADING...';
  if (status === USER_STATUSES.error) return 'Error';
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
    status: state.user.status,
  }
}

export default connect(mapStateToProps, {runFecthUserAC})(User);
