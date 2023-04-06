import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { tasksListSelector } from '../tasks.selectors';
import * as tasksActions from '../tasks.actions';

const TasksList = ({
  tasks,
  getTasksList,
  updateTask,
  deleteTask,
  createTask
}) => {
  useEffect(() => {
    getTasksList();
  }, []);

  const sortedList = tasks.slice().sort((a, b) => a.done - b.done);
  return (
    <main className="todo-list">
      <CreateTaskInput onCreate={createTask} />
      <ul className="list">
        {sortedList.map(task => (
          <Task
            key={task.id}
            {...task}
            onChange={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </main>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state)
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask
};

export default connect(mapState, mapDispatch)(TasksList);
