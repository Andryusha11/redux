import React, { useEffect } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { connect } from 'react-redux';
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
