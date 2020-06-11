import { createStore, combineReducers } from 'redux';
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';
import { languageReducer } from './language.reducer';

const appReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    language: languageReducer,
});

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

export default store;