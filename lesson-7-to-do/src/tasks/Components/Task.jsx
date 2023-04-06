import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({ id, done, text, onChange, onDelete }) => {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });

  return (
    <li className={listItemClasses}>
      <input
        onChange={() => onChange(id)}
        defaultChecked={done}
        type="checkbox"
        className="list-item__checkbox"
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  done: false,
};

export default Task;
