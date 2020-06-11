import { ADD, REMOVE } from './cart.actions';

const cart = {
    products: [],
};

export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                products: state.products.concat(action.payload.data),
            };
        }

        case REMOVE: {
            const newProductsList = state.products
                .filter(el => el.id !== action.payload.id);

            return {
                ...state,
                usersList: newProductsList,
            };
        }


        default:
            return state;
    };
};

