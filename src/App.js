import React from 'react';
import {connect} from 'react-redux';
import User from './components/user/User';

function App({appState}) {
  return (
    <section>
      <h1>{appState.title}</h1>
      <User />
    </section>
  );
}

function mapStateToProps(state) {
  return { appState: state.app }
}

export default connect(mapStateToProps)(App);
