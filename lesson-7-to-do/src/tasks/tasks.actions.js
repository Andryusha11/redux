import * as tasksGateways from './gateway/tasksGateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECIEVED = 'TASKS/TASKS_LIST_RECIEVED';

export const tasksListRecieved = tasksList => {
  return {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList
    }
  };
};

export const getTasksList = () => {
  const thunkAction = dispatch => {
    tasksGateways
      .fetchTasksList()
      .then(tasksList => dispatch(tasksListRecieved(tasksList)));
  };
  return thunkAction;
};

export const createTask = text => {
  const thunkAction = dispatch => {
    const newTask = {
      text,
      done: false,
      createdAt: new Date()
    };

    tasksGateways
      .createTask(newTask)
      .then(() => dispatch(getTasksList()));
  };

  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = dispatch => {
    tasksGateways
      .deleteTask(taskId)
      .then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = (dispatch, getState) => {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done
    };
    tasksGateways
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};
