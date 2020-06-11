export const ADD = 'CART/ADD';
export const REMOVE = 'CART/REMOVE';

export const addProduct = data => {
    return {
        type: ADD,
        payload: {
            data,
        }
    };
}

export const removeProduct = id => {
    return {
        type: REMOVE,
        payload: {
            id,
        }
    };
}



