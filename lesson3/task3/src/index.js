import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 80, name: 'meat' }));
store.dispatch(removeProduct(76));

store.dispatch(setLanguage('ru'));

store.dispatch(setUser({ name: 'Bob Martin', age: 17 }));
store.dispatch(removeUser({ name: 'Bob Martin', age: 17 }));