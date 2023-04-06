import React from 'react';
import { useState } from 'react';

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

export default CreateTaskInput;
