import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {appReducer} from './reducers/app';

// For dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  //applyMiddleware(),
);

const rootReducer = combineReducers({
  app: appReducer
});
export const store = createStore(rootReducer, enhancer);
