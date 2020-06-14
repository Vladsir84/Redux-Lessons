export const TOGGLE_USER = 'USERS/TOGGLE_USER';

export const toggleUser = userId => {
    return {
        type: TOGGLE_USER,
        payload: {
            userId
        },
    };
};