import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));
store.dispatch(addUser({ id: 80, name: 'Ivan'}));
store.dispatch(addUser({ id: 99, name: 'Mary'}));
store.dispatch(deleteUser(80));