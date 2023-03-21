import { deleteUser, addUser } from './users.actions';
import store from './store';

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(deleteUser(76));

store.subscribe(() => {
  console.log(store.getState());
});
