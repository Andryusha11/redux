import { createStore } from 'redux';
import { combineReducers } from 'redux';
import optionReducer from './options/options.reducer';

const appReducer = combineReducers({
  options: optionReducer
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
