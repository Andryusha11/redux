import React from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './counter.actions';

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button onClick={decrement} className="counter__button">
        -
      </button>
      <span onClick={reset} className="counter__value">
        {counter}
      </span>
      <button onClick={increment} className="counter__button">
        +
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    counter: state
  };
};

const mapDispatch = {
  increment: CounterActions.increment,
  decrement: CounterActions.decrement,
  reset: CounterActions.reset
};

const connector = connect(mapState, mapDispatch);

export default connector(Counter);
