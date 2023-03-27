import store from './store';
import { deleteUser, addUser, updateUser } from './users.actions';
import { decrement, increment, reset } from './counter.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 50, name: 'Andrew' }));
store.dispatch(deleteUser(76));
store.dispatch(updateUser(50, { age: 24 }));
