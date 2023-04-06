import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const CreateTaskInput = ({ onCreate }) => {
  const [inputValue, setInputValue] = useState('');

  const handleTaskCreate = e => {
    onCreate(inputValue);
    setInputValue(e.target.value);
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="btn create-task__btn"
        onClick={handleTaskCreate}
      >
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default CreateTaskInput;
