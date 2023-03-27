import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import store from './store';
import { removeUser, setUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 2, name: 'Milk' }));
store.dispatch(addProduct({ id: 3, name: 'Coke' }));
store.dispatch(addProduct({ id: 1, name: 'Sandwich' }));
store.dispatch(removeProduct(1));
store.dispatch(setLanguage('pl'));
store.dispatch(setUser({ id: 2, name: 'Andrii' }));
store.dispatch(setUser({ id: 1, name: 'Tom' }));
store.dispatch(removeUser());
