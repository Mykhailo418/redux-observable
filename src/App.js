import React from 'react';
import {connect} from 'react-redux';

function App({appState}) {
  return (
    <section>
      <h1>Redux Observable</h1>
      <p>{appState.name}</p>
    </section>
  );
}

function mapStateToProps(state) {
  return { appState: state.app }
}

export default connect(mapStateToProps)(App);
