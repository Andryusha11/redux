import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options.jsx';
import { toggleOption } from './options.actions';

const mapState = state => {
  return {
    options: selectedOptionsSelector(state)
  };
};

const mapDispatch = {
  moveOption: toggleOption
};

const connector = connect(mapState, mapDispatch);
export default connector(Options);
