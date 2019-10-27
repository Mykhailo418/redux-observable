import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

// Epics
import {fetchUser} from './epics/fetchUser';

// Reducers
import {appReducer} from './reducers/app';
import {userReducer} from './reducers/user';

// Epics Setup
const rootEpic = combineEpics(fetchUser);
const epicMiddleware = createEpicMiddleware();

// Reducers Setup
const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer
});

// For dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware),
);

// Store
const store = createStore(rootReducer, enhancer);

epicMiddleware.run(rootEpic);

export default store;
