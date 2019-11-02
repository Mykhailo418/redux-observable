import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

// Epics
import {fetchUser} from './epics/fetchUser';
import {fetchPosts} from './epics/fetchPosts';

// Reducers
import {appReducer} from './reducers/app';
import {userReducer} from './reducers/user';
import {postsReducer} from './reducers/posts';

// Epics Setup
const rootEpic = combineEpics(fetchUser, fetchPosts);
const epicMiddleware = createEpicMiddleware();

// Reducers Setup
const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  posts: postsReducer
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
