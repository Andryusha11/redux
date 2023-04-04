import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import usersReducer from './users/users.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  users: usersReducer
});

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = compose;
// window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger))
);

export default store;
