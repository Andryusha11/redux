import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
    applyMiddleware(logger)
  )
);

export default store;
