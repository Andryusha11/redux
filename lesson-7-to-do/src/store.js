import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './tasks/tasks.reducer';

const reducer = combineReducers({
  tasks: tasksReducer
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
